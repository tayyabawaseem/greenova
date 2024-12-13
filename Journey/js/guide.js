$(document).ready(function() {
    const plantData = {
        tropical: {
            sandy: {
                plants: [
                    { name: "Coconut Palm" },
                    { name: "Banana Tree" },
                    { name: "Frangipani" },
                    { name: "Bougainvillea" }
                ],
                info: "Tropical plants thrive in warm, humid climates with plenty of rainfall."
            },
            clay: {
                plants: [
                    { name: "Taro" },
                    { name: "Rice" },
                    { name: "Kava" },
                    { name: "Sugarcane" }
                ],
                info: "Clay soil retains moisture well but can be slow to drain."
            },
            loamy: {
                plants: [
                    { name: "Papaya" },
                    { name: "Pineapple" },
                    { name: "Avocado" },
                    { name: "Durian" }
                ],
                info: "Loamy soil is ideal for most tropical plants, offering balanced drainage and fertility."
            },
            silty: {
                plants: [
                    { name: "Mango" },
                    { name: "Guava" },
                    { name: "Jackfruit" },
                    { name: "Plumeria" }
                ],
                info: "Silty soil is fertile and retains moisture but can become compacted."
            }
        },
        arid: {
            sandy: {
                plants: [
                    { name: "Cactus" },
                    { name: "Aloe Vera" },
                    { name: "Agave" },
                    { name: "Desert Lily" }
                ],
                info: "Sandy soil in arid climates is well-draining and suitable for drought-tolerant plants."
            },
            clay: {
                plants: [
                    { name: "Mesquite" },
                    { name: "Creosote Bush" },
                    { name: "Ocotillo" },
                    { name: "Desert Marigold" }
                ],
                info: "Clay soil can retain moisture but may require good drainage in arid conditions."
            },
            loamy: {
                plants: [
                    { name: "Date Palm" },
                    { name: "Olive Tree" },
                    { name: "Grapevine" },
                    { name: "Fig Tree" }
                ],
                info: "Loamy soil in arid climates offers balanced moisture retention and drainage."
            },
            silty: {
                plants: [
                    { name: "Desert Rose" },
                    { name: "Russian Sage" },
                    { name: "Lavender" },
                    { name: "Yucca" }
                ],
                info: "Silty soil in arid areas is fertile but needs to be well-drained to avoid waterlogging."
            }
        },
        temperate: {
            sandy: {
                plants: [
                    { name: "Carrot" },
                    { name: "Radish" },
                    { name: "Beetroot" },
                    { name: "Turnip" }
                ],
                info: "Sandy soil in temperate zones is ideal for root vegetables and allows for good drainage."
            },
            clay: {
                plants: [
                    { name: "Apple Tree" },
                    { name: "Peach Tree" },
                    { name: "Cherry Tree" },
                    { name: "Pear Tree" }
                ],
                info: "Clay soil retains moisture and nutrients, making it suitable for fruit trees."
            },
            loamy: {
                plants: [
                    { name: "Tomato" },
                    { name: "Lettuce" },
                    { name: "Cucumber" },
                    { name: "Bell Pepper" }
                ],
                info: "Loamy soil provides a balanced environment for a wide variety of vegetables."
            },
            silty: {
                plants: [
                    { name: "Spinach" },
                    { name: "Kale" },
                    { name: "Broccoli" },
                    { name: "Cauliflower" }
                ],
                info: "Silty soil is fertile and well-suited for leafy greens and brassicas."
            }
        },
        cold: {
            sandy: {
                plants: [
                    { name: "Winter Wheat" },
                    { name: "Barley" },
                    { name: "Rye" },
                    { name: "Kale" }
                ],
                info: "Sandy soil in cold climates should be well-drained to avoid waterlogging in freezing temperatures."
            },
            clay: {
                plants: [
                    { name: "Garlic" },
                    { name: "Onion" },
                    { name: "Leek" },
                    { name: "Brussels Sprouts" }
                ],
                info: "Clay soil can support winter crops but may require frost protection."
            },
            loamy: {
                plants: [
                    { name: "Carrot" },
                    { name: "Parsnip" },
                    { name: "Beet" },
                    { name: "Turnip" }
                ],
                info: "Loamy soil provides good drainage and warmth for winter root vegetables."
            },
            silty: {
                plants: [
                    { name: "Swiss Chard" },
                    { name: "Cabbage" },
                    { name: "Mustard Greens" },
                    { name: "Rutabaga" }
                ],
                info: "Silty soil retains moisture and warmth, ideal for hardy winter greens."
            }
        }
    };
    
    $('#findPlantsBtn').click(function() {
        const climate = $('#climateSelect').val();
        const soil = $('#soilTypeSelect').val();

        if (climate && soil) {
            const plants = plantData[climate][soil].plants;
            const info = plantData[climate][soil].info;

            let plantList = plants.map(plant => `<li>${plant.name}</li>`).join('');
            let resultHtml = `
                <div class="plant-info show">
                    <h5>Best Plants for ${climate.charAt(0).toUpperCase() + climate.slice(1)} Climate with ${soil.charAt(0).toUpperCase() + soil.slice(1)} Soil:</h5>
                    <ul>${plantList}</ul>
                    <p>${info}</p>
                </div>
            `;

            $('#plantResults').html(resultHtml).hide().fadeIn(500);
            $('.container').addClass('moved'); // Hide the container
        } else {
            $('#plantResults').html('<p class="text-danger">Please select both climate and soil type.</p>').hide().fadeIn(500);
        }
    });
});
