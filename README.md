# ComponentCrew

En modern React-app som låter användare ladda upp Excel-filer (.xlsx), visa och redigera datan i en **Material React Table**, och sedan exportera den redigerade tabellen som PDF.

---

## ⚡ Funktioner

- Ladda upp **.xlsx-filer** via filinput.
- **Redigerbar tabell** med Material React Table.
- Exportera tabellen till **PDF** med `jspdf` + `jspdf-autotable`.
- Minimal och modulär kodbas, enkel att bygga vidare på.

---

## 📂 Projektstruktur

src/
├─ components/
│ ├─ UploadFile.tsx # Filuppladdning
│ ├─ EditableTable.tsx # Redigerbar tabell
│ └─ ExportPDFButton.tsx # PDF-exportknapp
├─ utils/
│ ├─ parseExcel.ts # Parser för Excel-filer
│ └─ exportPDF.ts # PDF-export
├─ types.ts # Typdefinitioner (RowData, CellValue)
├─ App.tsx
├─ main.tsx
└─ index.css

👥 Team

Mattias

Linda

Alexander

Erik

Hanna
