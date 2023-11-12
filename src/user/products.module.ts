import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersController } from "./controllers/user.controller";
import { User } from "./entities/user.entity";
import { UsersService } from "./services/user.service";
import { UserImage } from "./entities/user-image.entity";

@Module({
    imports: [TypeOrmModule.forFeature([User,UserImage])],
    controllers: [UsersController ],
    providers: [UsersService],
  })
  export class UsersModule {}