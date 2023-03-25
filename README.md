# Getting Started

First, run the development server:

- Clone the repository to your local machine.
- Install dependencies by running `npm install`.
- Run the app by running npm start and then either:
- For iOS: `npm run ios`
- For Android: `npm run android`


<br>

PhotoGallery app'i 2 sayfadan oluşmaktadır: `Home` ve `Detail`.

<br>

## Home Screen
<img src="assets/ss/main.png" alt="Home screen" width="250" height="auto" title="home screen ss">

<br>

Home sayfasında bir adet input alanı, categorileri gösteren bir slider (bu slider aktif değil, yalnızca butonların üstüne tıklandığında background colorları değişmektedir.) ve input alanında girilen texti içeren product-itemların listelendiği Search List bulunmaktadır.

<br>

- Sonuç listesi boş gelirse, kullanıcıları aşağıdaki gibi bir ekran karşılamaktadır.

<img src="assets/ss/no-content.png" alt="No content" width="250" height="auto" title="no content ss">

<br>
<br>

- Serverda yaşanacak herhangi bir aksilikte, kullanıcıları aşağıdaki gibi bir ekran karşılamaktadır.

<img src="assets/ss/error.png" alt="Error" width="250" height="auto" title="error screen ss">

<br>
<br>

## Detail Screen
<img src="assets/ss/detail.png" alt="Detail screen" width="250" height="auto" title="detail screen ss">

<br>

Detail sayfasında back butonu, input alanı, ürünü favorilere eklemek adına dinamik Heart iconu, ürünün görsellerinin listelendiği slider, açılıp kapatılabilen ürün açıklaması ve sepete eklemek adına pasif bir buton bulunmaktadır.

- Bu sayfada inputa tıklandığında, kullanıcının en son son arattığı kelimeler sondan başa doğru (son 5 arama) sıralanmaktadır. 

<img src="assets/ss/last-search.png" alt="Last search" width="250" height="auto" title="last search ss">

<br>

- Son aratılan kelimeler listesinde kullanıcı herhangi bir texte tıklandığında, Home sayfasına ilgili text araması ile yönlendirilmektedir. Ve yeniden istediği textin sonuçlarını görebilmektedir.

<img src="assets/ss/again-search.png" alt="Again search" width="250" height="auto" title="again search ss">

<br>

- Clean textine tıklandığı durumda ise, kullanıcılar geçmişte arattıkları tüm kelimeleri silebilmektediler veya cancel textine tıklayıp vazgeçedebilirler.

<img src="assets/ss/clean-modal.png" alt="Clean modal" width="250" height="auto" title="clean modal ss">

<br>

- Eğer kullanıcı henüz bir kelime aratmadı ise, aşağıdaki ekran karşılarına çıkacaktır.

<img src="assets/ss/empty-last-search.png" alt="Empty last search" width="250" height="auto" title="empty last search ss">