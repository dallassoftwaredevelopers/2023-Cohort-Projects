package com.cohortE.cohortProject.service;

import com.cohortE.cohortProject.dto.MedicationLogDto;
import com.cohortE.cohortProject.entity.Reminder;

import java.util.List;

public interface MedicationLogService {

    public List<MedicationLogDto> getDailyUsersMedicationLogs();

<<<<<<< HEAD
=======
    void addMedicationLog(Reminder reminder);
>>>>>>> origin/ricardo
}
