import { Table, Column, Model, DataType, Comment, Validate, BelongsTo, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { User } from './User';

export interface ICrew {
  crewID: string;
  makeUserID: string;
}

export interface ICrewInputDTO {
  crewID: string;
  makeUserID: string;
}

@Table({
  timestamps: true, // createAt, updatedAt 설정
  paranoid: true, // deletedAt 설정
})
export class Crew extends Model<ICrew> {
  @Column({
    primaryKey: true,
    field: 'crewID',
    type: DataType.INTEGER,
    comment: '크루 아이디',
    autoIncrement: true,  
    validate: {
      isInt: true,
    },    
  })
  crewID: number;
  
  // @BelongsTo(() => User,"makeuserID")  
  @BelongsTo(() => User,{ as:"fk_makeUserID" , foreignKey:{name: "makeUserID"}})  
  makeUserID: number;


}
