 function changePlan(plan) {
            let prices = document.querySelectorAll(".price");

            prices.forEach(function(price) {
                if (plan === "monthly") {
                    price.innerHTML =
                        "$" + price.dataset.month + "<span>/month</span>";
                } else {
                    price.innerHTML =
                        "$" + price.dataset.year + "<span>/year</span>";
                }
            });

            document.getElementById("monthly").classList.remove("active");
            document.getElementById("yearly").classList.remove("active");

            document.getElementById(plan).classList.add("active");
        }