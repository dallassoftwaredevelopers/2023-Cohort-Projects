package com.dallasdevs.team6.mapper;

import com.dallasdevs.team6.entity.UserEntity;
import com.dallasdevs.team6.json.RegisterUserPost;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {
    @Mapping(target = "uuid", ignore = true)
    UserEntity postToEntity(RegisterUserPost source);
}
