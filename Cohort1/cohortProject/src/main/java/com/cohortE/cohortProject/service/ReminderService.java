package com.cohortE.cohortProject.service;

import com.cohortE.cohortProject.dto.MedicationDto;
import com.cohortE.cohortProject.entity.Medication;
import com.cohortE.cohortProject.entity.Reminder;

import java.time.LocalTime;
import java.util.List;

public interface ReminderService {

    Reminder addReminder(Medication medication, LocalTime dosageTime);

    public List<Reminder> getAllDailyReminders();

    void updateDosageInfo(Long id, MedicationDto medicationDto);
}
