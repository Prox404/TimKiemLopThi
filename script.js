let fileInput = document.getElementById('file');

//Input Subject : CMU-CS 303 DIS. IS 301 D

const TimKiemLichThi = () => {
    // var subject = document.getElementById('Subject').value;
    let subject = "CS 464 H, POS 351 F,MTH 203 DIS, CMU-ENG 230 DIS";
    let table = document.getElementById('result');
    subject = subject.toUpperCase();
    let subjectArray = subject.split(",");
    let indexOfMaNganh;
    let indexOfMaMon;
    let indexOfKhoiThi;

    subjectArray.map(function (item) {
        let Lop = item.trim().split(" ");
        let MaNganh = Lop[0];
        let MaMon = Lop[0] + " " + Lop[1];
        let KhoiThi = Lop[2];
        
        readXlsxFile(fileInput.files[0]).then(function (rows) {
            // `rows` is an array of rows
            // each row being an array of cells.

            
                rows.map(function (row) {
                    row.map(function (cell, indexCell) {
                        if (cell == "Mã ngành") {
                            indexOfMaNganh = indexCell;
                        }else if (cell == "Mã môn") {
                            indexOfMaMon = indexCell;
                        }else if (cell == "Khối thi") {
                            indexOfKhoiThi = indexCell;
                        }
                    });
                });
                if (indexOfKhoiThi && indexOfMaMon && indexOfMaNganh) {
                    rows.map(function (row) {
                        try {
                            let khoithi = String(row[indexOfKhoiThi]).split("(")[1];
                            // console.log(khoithi, KhoiThi);
                            
                            // console.log(row[indexOfMaNganh] == MaNganh , row[indexOfMaMon] == MaMon , khoithi.includes(KhoiThi));
                            if (row[4] == MaNganh && row[6] == MaMon && khoithi.includes(KhoiThi)) {
                                console.log(row.length);
                                let rowTable = table.insertRow();
                                rowTable.insertCell(0).innerHTML = row[1];
                                rowTable.insertCell(1).innerHTML = new Date(row[2]).toLocaleDateString();
                                rowTable.insertCell(2).innerHTML = row[3];
                                rowTable.insertCell(3).innerHTML = row[6];
                                rowTable.insertCell(4).innerHTML = row[7];
                                rowTable.insertCell(5).innerHTML = row[8];
                                rowTable.insertCell(6).innerHTML = row[9];
                                rowTable.insertCell(7).innerHTML = row[13];
                                rowTable.insertCell(8).innerHTML = row[14];
                                rowTable.insertCell(9).innerHTML = row[16];
                            } 
                        } catch {
                            
                        }
                    });
                }else{
                    console.error("File không hợp lệ !");
                }
        });
    });
}
