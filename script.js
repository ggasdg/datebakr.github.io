document.addEventListener('DOMContentLoaded', () => {
    function getRandomPosition() {
        var screenWidth = window.innerWidth;
        var screenHeight = window.innerHeight;
        var randomX = Math.floor(Math.random() * (screenWidth - 100));
        var randomY = Math.floor(Math.random() * (screenHeight - 50));
        return { x: randomX, y: randomY };
      }
      
      // Function to handle hover event
      function handleHover() {
        var noElement = document.getElementById('no');
        var newPosition = getRandomPosition();
    
        noElement.style.position = 'absolute'
        noElement.style.left = newPosition.x + 'px';
        noElement.style.top = newPosition.y + 'px';
      }
      
      // Add event listener for hover
      document.getElementById('no').addEventListener('mouseover', handleHover);
      
})  