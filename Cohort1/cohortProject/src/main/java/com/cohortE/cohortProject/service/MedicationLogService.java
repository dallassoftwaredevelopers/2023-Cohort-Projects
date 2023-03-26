package com.cohortE.cohortProject.service;

import com.cohortE.cohortProject.dto.MedicationLogDto;

import java.util.List;

public interface MedicationLogService {

    public List<MedicationLogDto> getDailyUsersMedicationLogs();

    void addNewDailyMedicationLog();
}
