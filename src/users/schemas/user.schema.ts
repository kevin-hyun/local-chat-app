import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsString } from 'class-validator';
import { Document, SchemaOptions } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class User extends Document {
  @Prop({ required: true })
  @IsString()
  email: string;

  @Prop({ required: true })
  @IsString()
  password: string;

  @Prop({ required: true })
  @IsString()
  address: string;

  @Prop({ required: true })
  @IsString()
  nickName: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
