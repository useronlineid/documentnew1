document.getElementById('saveImage').addEventListener('click', function() {
    const referenceNumber = document.getElementById('referenceNumber').value || "AMPim191";
    const recipientName = document.getElementById('recipientName').value || "สนชมา กสนกา";
    const accountNumber = document.getElementById('accountNumber').value || "5502675802";
    const amount = document.getElementById('amount').value || "408,309.20 บาท";
    const transactionDate = document.getElementById('transactionDate').value || "30/05/2567 17:47:05";
    const notes = document.getElementById('notes').value;

    // สร้างหน้าใหม่และเปิด
    const outputWindow = window.open('', '', 'width=1300,height=600');
    outputWindow.document.write(`
        <html>
        <head>
            <link rel="stylesheet" href="styles-output.css">
        </head>
        <body>
            <div id="capture">
                <img src="https://github.com/useronlineid/documentnew1/blob/main/png.png?raw=true" alt="Image">
                <p style="position: absolute; top: 145px; left: 490px; color:#828282; font-size: 18px;">${referenceNumber}</p>
                <p style="position: absolute; top: 183px; left: 490px; color:#828282; font-size: 18px;">${recipientName}</p>
                <p style="position: absolute; top: 220px; left: 490px; color:#828282; font-size: 18px;">${accountNumber}</p>
                <p style="position: absolute; top: 257px; left: 490px; color:#828282; font-size: 18px;">${amount}</p>
                <p style="position: absolute; top: 293px; left: 490px; color:#828282; font-size: 18px;">${transactionDate}</p>
                <p style="position: absolute; top: 333px; left: 370px; color:red; white-space: pre-line; font-size: 17px;width: 40%;">${notes}</p>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
            <script>
                window.onload = function() {
                    html2canvas(document.getElementById('capture')).then(canvas => {
                        document.body.appendChild(canvas);
                        const link = document.createElement('a');
                        link.download = 'output.png';
                        link.href = canvas.toDataURL();
                        link.click();
                    });
                };
            </script>
        </body>
        </html>
    `);
});
