package com.cohortE.cohortProject.service.impl;

import com.cohortE.cohortProject.entity.Medication;
import com.cohortE.cohortProject.entity.Reminder;
import com.cohortE.cohortProject.repository.ReminderRepository;
import com.cohortE.cohortProject.service.ReminderService;
import org.springframework.stereotype.Service;

import java.time.LocalTime;

@Service
public class ReminderServiceImpl implements ReminderService {

    private final ReminderRepository reminderRepository;

    public ReminderServiceImpl(ReminderRepository reminderRepository) {
        this.reminderRepository = reminderRepository;
    }

    @Override
    public Reminder addReminder(Medication medication, LocalTime dosageTime) {
        Reminder reminder = new Reminder();
        reminder.setDosageTime(dosageTime);
        reminder.setMedication(medication);
        return reminderRepository.save(reminder);
    }
}
