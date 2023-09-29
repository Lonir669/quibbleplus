var player = videojs('my-video');

// Adicione faixas de áudio ao reprodutor
player.audioTracks().addTrack({
  id: 'audio-1',
  label: 'Áudio 1',
  language: 'pt',
  enabled: true,
  src: 'teste1.mp3',
});

player.audioTracks().addTrack({
  id: 'audio-2',
  label: 'Áudio 2',
  language: 'en',
  enabled: false,
  src: 'teste2.mp3',
});

// Alterne entre as faixas de áudio
player.on('audiochange', function() {
  console.log('Faixa de áudio alterada para: ' + player.audioTracks().enabledTrack().label);
});