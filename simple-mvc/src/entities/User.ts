import { Table, Column, Model, DataType, Comment, Validate, Length, BelongsTo } from 'sequelize-typescript';
import { Crew } from './Crew';


export class IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  salt: string;
}

export class IUserInputDTO {
  name: string;
  email: string;
  password: string;
}


@Table({
  timestamps: true, // createAt, updatedAt 설정
  paranoid: true, // deletedAt 설정
})
export class User extends Model<IUser> {
  @Column({
    primaryKey: true,
    field: '_id',
    type: DataType.INTEGER,
    comment: '사용자 아이디',
    defaultValue: DataType.UUIDV4,
    validate: {
      isUUID: 4,
    },
  })
  _id: string;
  
  @Column({
    field: 'name',
    type: DataType.CHAR(25),
    comment: '사용자 이름',
    validate: {
      min: 2,
      max: 25,
    }
  })
  name: string;

  @Column({
    field: 'email',
    type: DataType.CHAR(225),
    comment: '사용자 이메일',
    validate: {
      isEmail: true
    }
  })
  email: string;

  @Column({
    field: 'password',
    type: DataType.CHAR(20),
    comment: '사용자 비밀번호',
    validate: {
      len: [8,20]
    }
  })
  password: string;

  @Column({
    field: 'password',
    type: DataType.CHAR(32),
    comment: 'salt',
  })
  salt: string;

  
  
  
}


