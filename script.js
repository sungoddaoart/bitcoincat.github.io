document.addEventListener('DOMContentLoaded', () => {
    let seconds = 0;
    let minutes = 0;

    function updateTimer() {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        document.querySelector('.timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    setInterval(updateTimer, 1000);

    const nyanAudio = document.getElementById('nyan-audio');
    const audioControlButton = document.getElementById('audio-control');

    let isPlaying = false;

    audioControlButton.addEventListener('click', () => {
        if (isPlaying) {
            nyanAudio.pause();
            audioControlButton.textContent = 'Play Music';
        } else {
            nyanAudio.play().catch(error => {
                console.error('Audio playback failed:', error);
            });
            audioControlButton.textContent = 'Pause Music';
        }
        isPlaying = !isPlaying;
    });
});