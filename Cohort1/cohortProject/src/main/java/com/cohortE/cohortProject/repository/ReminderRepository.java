package com.cohortE.cohortProject.repository;

import com.cohortE.cohortProject.entity.Reminder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReminderRepository extends JpaRepository<Reminder, Long> {
}
