package com.dallasdevs.team6.mapper;

import com.dallasdevs.team6.entity.EventEntity;
import com.dallasdevs.team6.json.CreateEventPost;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface EventMapper {

    @Mapping(target = "uuid", ignore = true)
    EventEntity postToEntity(CreateEventPost source);

    @Mapping(target = "uuid", ignore = true)
    void updateEventEntityFromPost(CreateEventPost source, @MappingTarget EventEntity target);

}

