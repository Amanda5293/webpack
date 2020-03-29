export default function() {
  
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('utils----2')
  });
}).then(data => console.log(data));
}