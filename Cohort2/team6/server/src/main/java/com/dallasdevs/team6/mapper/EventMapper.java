package com.dallasdevs.team6.mapper;

import com.dallasdevs.team6.entity.EventEntity;
import com.dallasdevs.team6.json.CreateEventPost;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface EventMapper {

    @Mapping(target = "id", ignore = true)
    EventEntity postToEntity(CreateEventPost source);

}

