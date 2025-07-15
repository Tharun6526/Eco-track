document.getElementById("carbonForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const kmPerWeek = parseFloat(document.getElementById("km_per_week").value);
  const fuelEfficiency = parseFloat(document.getElementById("fuel_efficiency").value);
  const kwhPerMonth = parseFloat(document.getElementById("kwh_per_month").value);
  const wasteKgPerWeek = parseFloat(document.getElementById("waste_kg_per_week").value);

  const transport = (kmPerWeek / fuelEfficiency) * 52 * 2.31;
  const electricity = kwhPerMonth * 12 * 0.92;
  const waste = wasteKgPerWeek * 52 * 0.45;
  const total = transport + electricity + waste;

  document.getElementById("transportOutput").textContent = `🚗 Transportation: ${transport.toFixed(2)} kg CO₂`;
  document.getElementById("electricityOutput").textContent = `⚡ Electricity: ${electricity.toFixed(2)} kg CO₂`;
  document.getElementById("wasteOutput").textContent = `🗑️ Waste: ${waste.toFixed(2)} kg CO₂`;
  document.getElementById("totalOutput").textContent = `🌍 Total: ${total.toFixed(2)} kg CO₂ / year`;

  const tip = document.getElementById("tipOutput");
  if (total > 10000) {
    tip.textContent = "⚠️ Your emissions are high. Try carpooling, using clean energy, or reducing waste.";
    tip.classList.remove("success");
  } else {
    tip.textContent = "✅ Great job! You're living sustainably.";
    tip.classList.add("success");
  }

  document.getElementById("results").style.display = "block";
});
