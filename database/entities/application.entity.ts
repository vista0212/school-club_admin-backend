import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';

export default class Application extends Model<Application> {
  public pk: number;
  public phone: string;
  public classNum: number;
  public studentNum: number;
  public name: string;
  public field:
    | 'Forensic'
    | 'Pwnable'
    | 'Web Hacking'
    | 'Web FrontEnd Development'
    | 'BackEnd Development'
    | 'App Development';
  public content: string;
  public password: string;
  public passwordKey: string;
  public isSubmit: boolean;

  public readonly createdAt: Date;
  public readonly updatedAt: Date;
}

Application.init(
  {
    pk: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    classNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    studentNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    field: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    passwordKey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isSubmit: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    sequelize,
    tableName: 'applications'
  }
);
