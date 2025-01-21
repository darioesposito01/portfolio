| domain | field | type | description | note |
| --- | --- | --- | --- | --- |
| catalog.locode_filter | code | select | Codice LOCODE | |
| catalog.locode_filter | description | select | Descrizione del LOCODE | |
| catalog.locode_filter | country | select | Paese di appartenenza | |
| catalog.locode_filter | status | select | Stato del LOCODE | |
| catalog.locode_filter | active | select | Indica se il LOCODE è attivo | |
| catalog.locode_filter | date_from | date | Data di inizio validità | |
| catalog.locode_filter | date_to | date | Data di fine validità | Deve essere maggiore o uguale a date_from |
| catalog.waste_filter | code | select | Codice del rifiuto | |
| catalog.waste_filter | waste_type | select | Tipo di rifiuto | |
| catalog.waste_filter | date_from | date | Data di inizio validità | |
| catalog.waste_filter | date_to | date | Data di fine validità | Deve essere maggiore o uguale a date_from |
| catalog.marpol_filter | properShippingName | select | Nome proprio di spedizione | |
| catalog.marpol_filter | pollutionCategory | select | Categoria di inquinamento | |
| catalog.marpol_filter | startDate | date | Data di inizio | |
| catalog.marpol_filter | endDate | date | Data di fine | |
| catalog.imsbcCatalog_filter | from_code | string | Codice iniziale IMSBC | |
| catalog.imsbcCatalog_filter | to_code | string | Codice finale IMSBC | |
| catalog.imsbcCatalog_filter | material | string | Materiale | |
| catalog.imsbcCatalog_filter | group_material | select | Gruppo del materiale | Campo duplicato nel JSON |
| catalog.imsbcCatalog_filter | reference | string | Riferimento | |
| catalog.imsbcCatalog_filter | status | select | Stato del record | |
| catalog.imsbcCatalog_filter | date_creation | date | Data di creazione | |
| catalog.imsbcCatalog_filter | date_update | date | Data di aggiornamento | |
| catalog.ibc_filter | from_code | select | Codice iniziale IBC | |
| catalog.ibc_filter | to_code | select | Codice finale IBC | |
| catalog.ibc_filter | description | select | Descrizione | Valori enum: ENUM1, ENUM2, ENUM3 |
| catalog.ibc_filter | category | select | Categoria | Valori enum: ENUM1, ENUM2, ENUM3 |
| catalog.ibc_filter | status | select | Stato | Valori enum: ENUM1, ENUM2, ENUM3 |
| catalog.ibc_filter | date_creation | date | Data di creazione | |
| catalog.ibc_filter | date_update | date | Data di aggiornamento | |
| catalog.IGC_filter | un_number_from | select | Numero UN iniziale | Per filtraggio range |
| catalog.IGC_filter | un_number_to | select | Numero UN finale | Per filtraggio range |
| catalog.IGC_filter | product_description | select | Descrizione prodotto | |
| catalog.IGC_filter | ship_type | select | Tipo di nave | |
| catalog.IGC_filter | steam_control | select | Sistema di controllo vapore | |
| catalog.IGC_filter | special_requirements | select | Requisiti speciali | |
| catalog.IGC_filter | status | select | Stato | Valori: active, inactive, all |
| catalog.IGC_filter | mfag_from | select | Codice MFAG iniziale | |
| catalog.IGC_filter | mfag_to | select | Codice MFAG finale | |
| catalog.IGC_filter | date_from | date | Data inizio | |
| catalog.IGC_filter | date_to | date | Data fine | Deve essere maggiore o uguale a date_from |
| catalog.IMDG_filter | un_from | integer | Numero UN iniziale | Campo obbligatorio |
| catalog.IMDG_filter | un_to | integer | Numero UN finale | Campo obbligatorio |
| catalog.IMDG_filter | description | string | Descrizione | |
| catalog.IMDG_filter | class | autocomplete | Classe | |
| catalog.IMDG_filter | group | select | Gruppo | |
| catalog.IMDG_filter | date_from | date | Data inizio | |
| catalog.IMDG_filter | date_to | date | Data fine | Deve essere maggiore o uguale a date_from |
