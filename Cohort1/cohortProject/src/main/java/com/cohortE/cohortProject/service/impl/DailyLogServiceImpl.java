package com.cohortE.cohortProject.service.impl;

import com.cohortE.cohortProject.entity.MedicationLog;
import com.cohortE.cohortProject.entity.Reminder;
import com.cohortE.cohortProject.repository.MedicationLogRepository;
import com.cohortE.cohortProject.service.DailyLogService;
import com.cohortE.cohortProject.service.ReminderService;

import java.time.LocalDate;
import java.util.List;

public class DailyLogServiceImpl implements DailyLogService {
    private ReminderService reminderService;
    private MedicationLogRepository medicationLogRepository;
    public void addNewDailyMedicationLog(){
        List<Reminder> listOfDailyReminders  =  reminderService.getAllDailyReminders();
        for(Reminder reminder : listOfDailyReminders) {
            MedicationLog medicationLog = new MedicationLog();
            medicationLog.setLogDate(LocalDate.now());
            medicationLog.setTaken(false);
            medicationLog.setReminder(reminder);
            medicationLogRepository.save(medicationLog);
        }
    }
}
