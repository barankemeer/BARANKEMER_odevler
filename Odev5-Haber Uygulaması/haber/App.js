import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  ImageBackground
} from 'react-native';


import NewsItem from './NewsItem.js';

import Background from './FOTO.jpg';

const App = () => {
  return (
    <SafeAreaView>
      <ImageBackground source={Background} style={{ resizeMode: 'cover' }}>
        <ScrollView>
          <NewsItem type='Technology' title="Konsol Fiyatları" description="Konsol fiyatları artık ÖTV'li." />
          <NewsItem type='Technology' title="Telefon Fiyatları" description="2020 kur dolayısıylar fiyatar tavan yaptı" />
          <NewsItem type='Technology' title="Steam'de sonbahar indirimlerl" description="Son dönemin en büyük indirimleri" />
          <NewsItem type='Magazine' title="Cem yılmaz Serenay sarıkaya" description="Aralarındaki ilişki büyük sallantıda." />
          <NewsItem type='Magazine' title="Youtube kralı" description="Enes batur son model aracıyla etilerde kaza yaptı." />
          <NewsItem type='Magazine' title="Ünsüz tiyatrocunun dramı" description="Ünsüz oyuncu Baran Kemer Bulut bilişim Ödevini yaparken ölü bulundu(bilgisayarının başında)." />
          <NewsItem type='Politics' title="TBMM" description="Bugün mecliste yumruklar havadaydı." />
          <NewsItem type='Politics' title="Erdoğan gene muhalafete kan kustu" description="Erdoğan Akşenere'2 2 4 eder bırak güzelim bırak anan beni deli eder' dedi ortalık karıştı" />
          <NewsItem type='Politics' title="Yeni ekonomi durumu" description="'Başımız dik yürüyoruz'diyen albayrağa Ali Atay'ın Cevabı 'Çünkü boğazına kadar b*ka battın " />
          <NewsItem type='Sports' title="Derbide kıran kırana mücadele" description="FB-Beşiktaş derbisi nefes kesti" />
          <NewsItem type='Sports' title="Türkiye Almanya Maçı" description="Türkiye-Almanya maçı 1-1 beraberlik ile sonuçlandı." />
          <NewsItem type='Sports' title="FB-GS Derbisi " description="FB-GS Derbisi Heyecanlı geçti." />
          <NewsItem type='Health' title="Coronavirüs Son Dakika" description="Aşının etkisi %99 olacak "/>
          <NewsItem type='Health' title="Sars virüsü" description="Covid-19 dan sonra Sars virüsü yayılmaya başladı." />
          <NewsItem type='Health' title="Uyuşturucu oranı arttı" description="Son günlerde depresif insanların kullandığı uyuşturucu türleri arttı." />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};



export default App;
