let fileInput = document.getElementById('file');

//Input Subject : CMU-CS 303 DIS. IS 301 D

const TimKiemLichThi = () => {
    // var subject = document.getElementById('Subject').value;
    let subject = "CHI 218 A, IS 301 D";
    subject = subject.toUpperCase();
    let subjectArray = subject.split(",");

    subjectArray.map(function (item) {
        let Lop = item.trim().split(" ");
        const MaNganh = Lop[0];
        const MaMon = Lop[0] + " " + Lop[1];
        const KhoiThi = Lop[2];
        console.info(MaNganh, MaMon, KhoiThi);
        readXlsxFile(fileInput.files[0]).then(function (rows) {
            // `rows` is an array of rows
            // each row being an array of cells.
            
            rows.map(function (row) {
                let khoithi = String(row[9]).split("(")[1];
                if (row[4] == MaNganh && row[6] == MaMon && khoithi.includes(KhoiThi)) {
                    console.log(row);
                }
            });
        });
    });
}
