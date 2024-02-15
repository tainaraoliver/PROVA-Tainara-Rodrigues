<script>
        function calculateLoan() {
            var loanAmount = parseFloat(document.getElementById('loanAmount').value);
            var interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
            var loanTerm = parseFloat(document.getElementById('loanTerm').value);

            var totalPayment = loanAmount + (loanAmount * interestRate * loanTerm);
            var formattedPayment = totalPayment.toFixed(2);

            document.getElementById('result').innerHTML = "Pagamento total: $" + formattedPayment;
        }
    </script>