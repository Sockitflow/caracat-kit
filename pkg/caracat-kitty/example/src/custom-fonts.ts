export let customFonts = {
  // 'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
  'Inter-SemiBoldItalic':
  https://raw.githubusercontent/hossam1231/caracat-react-native-kitty/blob/f406f4ec79a9bc5cb3c6c3574df9eb31ebe37384/pkg/fonts/font-inter/Inter-Black.otf
    'https://raw.githubusercontent/hossam1231/caracat-react-native-kitty/master/pkg/fonts/font-inter/Inter-Black.otf',
https://github.com/hossam1231/caracat-react-native-kitty/blob/main/pkg/fonts/font-inter/Inter-Black.otf
  }
;


async function fetchFontFileAndLoad(url) {
  try {
    const response = await fetch(url);
    const fontBlob = await response.blob();
    const fontUrl = URL.createObjectURL(fontBlob);

    // Use the fontUrl to load the font into your application
    // For web applications, you might use CSS @font-face rule
    // For React Native, it depends on the method you're using

    return fontUrl; // Return the URL in case you need it
  } catch (error) {
    console.error('Error fetching font file:', error);
    return null;
  }
}

// // Example usage:
// const fontUrl =
//   'https://raw.githubusercontent/hossam1231/caracat-react-native-kitty/blob/main/pkg/fonts/font-inter/Inter-Black.otf';
// fetchFontFileAndLoad(fontUrl).then((fontUrl) => {
//   if (fontUrl) {
//     console.log('Font loaded successfully:', fontUrl);
//   } else {
//     console.log('Failed to load font.');
//   }
// });
