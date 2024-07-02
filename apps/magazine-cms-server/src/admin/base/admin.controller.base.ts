/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { AdminService } from "../admin.service";
import { AdminCreateInput } from "./AdminCreateInput";
import { Admin } from "./Admin";
import { AdminFindManyArgs } from "./AdminFindManyArgs";
import { AdminWhereUniqueInput } from "./AdminWhereUniqueInput";
import { AdminUpdateInput } from "./AdminUpdateInput";

export class AdminControllerBase {
  constructor(protected readonly service: AdminService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Admin })
  async createAdmin(@common.Body() data: AdminCreateInput): Promise<Admin> {
    return await this.service.createAdmin({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Admin] })
  @ApiNestedQuery(AdminFindManyArgs)
  async admins(@common.Req() request: Request): Promise<Admin[]> {
    const args = plainToClass(AdminFindManyArgs, request.query);
    return this.service.admins({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Admin })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async admin(
    @common.Param() params: AdminWhereUniqueInput
  ): Promise<Admin | null> {
    const result = await this.service.admin({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Admin })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAdmin(
    @common.Param() params: AdminWhereUniqueInput,
    @common.Body() data: AdminUpdateInput
  ): Promise<Admin | null> {
    try {
      return await this.service.updateAdmin({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Admin })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAdmin(
    @common.Param() params: AdminWhereUniqueInput
  ): Promise<Admin | null> {
    try {
      return await this.service.deleteAdmin({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
