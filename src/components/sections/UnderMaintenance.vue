<template>
    <div
        class="min-h-screen bg-gradient-to-br from-dark-primary to-dark-secondary flex items-center justify-center p-4">
        <div class="text-center text-light-primary max-w-4xl">

            <!-- Maintenance Message -->
            <div class="p-3 md:p-6 font-pixel">
                <!-- Icon -->
                <img src="/maintenance.png" alt="Maintenance Image" class="w-full rounded-md object-contain mb-6" />

                <h2 class="text-xl md:text-3xl font-bold mb-4 text-accent-teal">
                    Website Under Maintenance
                </h2>

                <p class="text-xl mb-6 text-accent-pink">
                    Crafting something extraordinary!
                </p>

                <div class="bg-accent-teal/20 border border-accent-pink/40 rounded-md p-4 mb-6 text-sm">
                    <p>
                        New portfolio coming soon with modern design and smooth experience!
                    </p>
                </div>

                <!-- Progress Bar -->
                <div class="mb-6">
                    <div class="flex justify-between text-sm mb-2">
                        <span class="text-accent-pink">Development Progress</span>
                        <span class="text-accent-teal">25%</span>
                    </div>
                    <div class="w-full bg-dark-primary rounded-full h-2 border border-accent-teal/20">
                        <div
                            class="bg-gradient-to-r from-accent-teal to-accent-purple h-2 rounded-full w-1/4 transition-all duration-500">
                        </div>
                    </div>
                </div>

                <!-- Contact Info -->
                <div class="mt-8 pt-6 border-t border-accent-pink/20 text-sm">
                    <p class="mb-4 text-accent-teal">Get in touch:</p>
                    <div class="flex justify-center space-x-6">
                        <a href="mailto:alvianharyanto@gmail.com"
                            class="hover:text-accent-teal transition-colors duration-300 flex items-center group">
                            <span class="mr-2 group-hover:scale-110 transition-transform"></span> Email
                        </a>
                        <a href="https://linkedin.com/in/alvianharyanto"
                            class="hover:text-accent-teal transition-colors duration-300 flex items-center group">
                            <span class="mr-2 group-hover:scale-110 transition-transform"></span> LinkedIn
                        </a>
                        <a href="https://github.com/alvianharyanto"
                            class="hover:text-accent-teal transition-colors duration-300 flex items-center group">
                            <span class="mr-2 group-hover:scale-110 transition-transform"></span> GitHub
                        </a>
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <div class="mt-3 text-light-primary/60">
                <p>© 2025 Alvian Haryanto.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.font-pixel {
    font-family: 'Press Start 2P', cursive;
}

/* Smooth gradient animations */
.gradient-text {
    background: linear-gradient(135deg, #A8DADC, #B39CD0, #FFC1CC);
    background-size: 200% 200%;
    animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
    0% {
        background-position: 0% 50%
    }

    50% {
        background-position: 100% 50%
    }

    100% {
        background-position: 0% 50%
    }
}
</style>