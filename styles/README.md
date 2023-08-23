<!-------- Intall SASS ------->
npm install -g sass

<!-------- Use SASS -------->
cd styles
sass --watch .:../assets/. --style compressed

<!-------- Use Mixin with type of -------->
@import 'function.scss';

<!-- String -->
@include customFont(50px, 900, 100%, red, #{25px}, 0.7);

<!-- Number -->
@include customFont(50px, 900, 100%, red, 25px, 0.7);


<!------- Website Autoprefixed-------->
https://autoprefixer.github.io/