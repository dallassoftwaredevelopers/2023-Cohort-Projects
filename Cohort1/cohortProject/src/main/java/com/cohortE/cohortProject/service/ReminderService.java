package com.cohortE.cohortProject.service;

import com.cohortE.cohortProject.entity.Medication;
import com.cohortE.cohortProject.entity.Reminder;

import java.time.LocalTime;

public interface ReminderService {

    Reminder addReminder(Medication medication, LocalTime dosageTime);
}
