import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';

const FAQS = [
  
  {
    title: 'Şeffaf Plak Tedavisi',
    content: () => (
      <>
      Ortodonti tedavi yöntemleri arasında sıklıkla değerlendirilen şeffaf plak uygulamaları Ankara’da sağladığı faydalar ve avantajlar ile birçok hasta tarafından talep edilmektedir. Uzm. Dt. Zeynep Karakoç ve yardımcıları tarafından tatbik edilen bu uygulamalarda yüzde yüz oranında hasta memnuniyeti sağlanmaktadır. Ön muayene için hem online platformlar hem de telefon hatları aktif olarak kullanılabilir. Hasta hikayesi alınıp şikayetleri dinlendikten sonra bir dizi testler yapılmaktadır. Ek bir sağlık problemi olmayan herkes şeffaf plak yaptırabilir.
      </>
    ),
  },
  {
    title: 'Şeffaf Plaklar ve Sunduğu Avantajlar',
    content: () => (
      <>
      Şeffaf plak uygulamanın birden fazla avantajı bulunmaktadır. Bu avantajlar günden güne yayıldığı için en sık yapılan uygulamaların başında geliyor. En başta estetik açıdan kaygıları bulunan tüm hastalara şeffaf plak tedavisi Ankara seçenekleri sunulmaktadır. Hiçbir şekilde görünmüyor olması genel ağız estetiği açısından büyük oranda avantajlı bulunmaktadır. Diğer plaklar bariz ve belirgin bir şekilde görüldüğü için çoğu hasta tarafından sağlıklı dahi olsa estetik dışı görüldüğü için talep edilmemektedir.
<br></br><br></br>
Şeffaf plak uygulamaların sunduğu avantajlar bunlarla sınırlı değildir. Diş bozukluklarının kalıcı bir şekilde düzelmesini sağlayan şeffaf plaklar teknoloji desteği ile birlikte tatbik edilmektedir. Hastanelerde birden fazla dijital gösterge ve cihaz çok daha hızlı ve sağlıklı bir şekilde şeffaf plakların takılması için çalışmaktadır. Bu plakların en önemli özelliklerinden biri hastaların istedikleri zamanlarda çıkarabiliyor olmasıdır. Bu açıdan bakıldığında son derece pratik bulunmaktadır. Aynı zamanda diğer modellerinin aksine temizliği ve bakımı da aynı oranda kolaydır.
<br></br><br></br>
Daha önceki plak deneyimlerinde tahriş gibi rahatsızlıklardan şikayet edenler için de sunulan avantajlar söz konusudur. Plaklar ağızda ne kadar kalırsa kalsın hiçbir şekilde tahrişe neden olmaz. Tamamen yumuşak maddelerden yapılmaktadır. Test edilip onaylanma süreçlerinden geçerek hastalara takıldığı için de istenmeyen yan etkilere yol açmaz.
<br></br><br></br>
Piyasada yer alan tüm diş tellerine oranla çok daha rahat olduğu da daha önceden şeffaf plak taktıranların dile getirdiği bir diğer avantajdır. Sayılabilecek bir diğer yarar ise hiçbir kısıtlama olmadan beslenmeye devam edilmesidir. Örneğin bazı diş tellerinde asitli, aşırı soğuk ya da sıcak şeylerin tüketilmesi yasaklanmıştır. Ancak söz konusu şeffaf plaklar olduğunda böyle bir kısıtlamaya lüzum görülmemektedir.
      </>
    ),
  },
  {
    title: 'Şeffaf Plak Nasıl Uygulanır?',
    content: () => (
      <>
      Şeffaf Plak uygulanacak hastaların fazlaca merak ettiği konuların başında şeffaf plakların nasıl uygulandığı yönündeki sorular geliyor. Şeffaf plaklar teknoloji destekli üretilip imal edildikleri için hiçbir yan etkisi bulunmadan, hızlı bir şekilde uygulanabilir. Genelde tek bir seans bunun için yeterli olmaktadır. Ölçülerin alınması ve diğer işlemlerin tamamlanması için bazen seans süreleri 2 ya da 3’e kadar çıkabilir. Sadece uzman, alanında deneyimli ve eğitim görmüş kişiler tarafından ifa edilmelidir. Bunun için de bir ön muayene şarttır.
<br></br><br></br>
Her plak hastaya özel bir şekilde imal edildiği için uygulama esnasında herhangi bir komplikasyona rastlanmaz. Plaklar takılmadan önce son kez çeşitli kontroller yapılır. Plakların iki hafta süreyle yenilenmesi gerekmektedir. Bu alanda doktorlar ve yardımcıları hastaları doğru bir şekilde bilgilendirir. İlk plaklardan sonra yapılan uygulamanın adı butondur. Daha sonrasında ikinci plaklar takılarak işlemler tamamlanır.
      </>
    ),
  },
  {
    title: 'Şeffaf Plak Fiyatları ve Sıklıkla Merak Edilenler',
    content: () => (
      <>
      Merak edilen konulardan bir diğeri de şeffaf plak tedavisi fiyatları Ankara kapsamında yöneltilen sorulardır. Bu kapsamda net bir bilgi vermek doğru olmayacaktır. Ancak ilk muayeneden sonra kullanılacak malzemeler ve plak cinsi belirlendikten sonra fiyat teklifi almak mümkündür.
<br></br><br></br>
Şeffaf plak uygulamalarının bir yan etkisi olup olmadığı da sıklıkla merak edilen bir diğer husustur. Tamamen sağlıklı olan plaklar hiçbir şekilde yan etkilere yol açmaz.
      </>
    ),
  },
  {
    title: 'Şeffaf Plak Herkese Uygulanabilir mi?',
    content: () => (
      <>
      Elbette hayır. Bazı kompleks vakalarda şeffaf ortodontik plaklar işe yaramamaktadır. Örneğin diş çekimleri ya da ameliyatlar gereken aşırı çene darlığı vakalarında bir şeffaf apareyle tedaviyi gerçekleştirmek şimdilik pek mümkün değildir.
      <br></br><br></br>
Kişinin diş dizisindeki bozukluğun şeffaf apareylerle düzelip düzelmeyeceğine diş hekimi karar verir, duruma göre ortodonti uzmanına yönlendirebilir.
<br></br><br></br>
Yaş olarak ise bu tedavi protokolü 12 yaşından büyük herkese uygulanabilir. Elbette yaş ilerledikçe dişlerin hareket kabiliyeti azalmaktadır ancak bu diş dizisindeki bozuklukların bu tedavi seçeneği ile düzeltilemeyeceği anlamına gelmemektedir.
<br></br><br></br>
Şeffaf Ortodontik Plak Dişleri Nasıl Hareket Ettiriyor?
<br></br>
Uygun olan vakalarda, alt ve üst dişlerden ölçü alınır. Bu ölçüye göre, bir simülasyon programı üzerinde dişlerin son hali ortaya çıkarılır. Daha sonra dişleri bu ilk halden son haline getirecek olan şeffaf plaklar 3D yazıcılarda üretilir.
<br></br><br></br>
Her plak, dişleri bir önceki plağa göre biraz daha hareket ettirerek nihayet son plakla birlikte dişler ideal düzenine gelmiş olur.
      </>
    ),
  },
  {
    title: 'Şeffaf Plaklarla İlgili Problemler Nelerdir?',
    content: () => (
      <>
      Genelde butonlarla ilgili yakınmalar olabilir.
      <br></br><br></br>
Takıp çıkarırken plakların bükülmesi, deforme olması söz konusu olabilir. Bu nedenle hassas davranmalısınız. Bir sorunla karşılaşırsanız hemen doktorunuza başvurmalısınız.
Yanlış planlama zayıf sonuçlara neden olabilir.
<br></br><br></br>
Plak çıkarılmadan tüketilen bazı yiyecekler renklenmeye neden olabilir.
Plağınızı çıkardığınızda özel kutusunda saklamazsanız kaybedebilirsiniz. Bu da tedavi gidişatında aksamalara neden olabilir.
<br></br><br></br>
Düzgün bir gülümsemeye sahip olmak isteyen ama tel takmak istemeyen hastalar için ve daha önce ortodontik tedavi görmüş minör geriye dönüşler yaşayan hastalar için şeffaf plaklar iyi bir alternatiftir. Siz de şeffaf plak tedavisi için uygun olup olmadığınızı öğrenmek için Uz. Dt. Zeynep Karakoç’tan hemen bir randevu alın.
      </>
    ),
  },
  {
    title: 'Şeffaf Plakların Avantajları Nelerdir?',
    content: () => (
      <>
      Görünmezdir. Geleneksel braketler gibi tel ve braket görüntüsü yoktur.
      <br></br><br></br>
Temizleme ve fırçalama sırasında aparey ağızda değildir ve bu nedenle tedavi görmeden önce olandan farklı bir fırçalama prosedürü gerektirmez. Sadece plağınızı çıkarın, dişlerinizi fırçalayın ve tekrar plağınızı takın. Hepsi bu kadar.
<br></br><br></br>
Tedavi sırasında yiyecek içecek sınırlaması yoktur. Sadece plağınızı çıkarıp istediğiniz yiyeceği yedikten sonra tekrar plağınızı takabilirsiniz.
<br></br><br></br>
Tedavi sırasında diş ve dişeti sağlığının korunması açısından daha avantajlı oldukları söylenebilir.
      </>
    ),
  },
  {
    title: 'Şeffaf Plaklar Nasıl Yapılır?',
    content: () => (
      <>
      Öncelikle bir ortodonti uzmanına muayene olup şeffaf plak tedavisi için uygun olup olmadığınızı öğrenebilirsiniz. Vakanın karmaşıklığına ve hastanın tedaviden beklentisine göre şeffaf plaklarla tedavi olabileceğiniz ya da olamayacağınız konusunda bilgi alabilirsiniz. Doktorunuz şeffaf plak tedavisi için uygun bir aday olduğunuzu onayladıktan sonra en önemli adım ölçü alımıdır. Geleneksel ölçü ve alçı model yapımı ya da direk ağız içi tarama yöntemi ile ölçü alınabilir. Bu ölçüler üzerinde dişlerinizin yeni pozisyonları ayarlanır ve doktorunuzla birlikte tedavi sonrası halini görüp değerlendirebilirsiniz. Bu analize göre üç boyutlu yazıcılar tarafından plaklarınız üretilir. Plaklarınız geldiğinde ilkini almak üzere kliniğe çağırılırsınız. Dişlerin hareketine yardımcı olmak ve daha etkili diş hareketi sağlamak için gerekli olan dişlere küçük kompozit “butonlar” yapılır. Plaklarınızı iki hafta boyunca yemekler dışında sürekli takmalısınız. Yani günde 22 saat boyunca takılmalıdır.
      </>
    ),
  },
  {
    title: 'Şeffaf Plaklar Nasıl Çalışır?',
    content: () => (
      <>
      Şeffaf plaklar dişleri küçük miktarlarda hareket ettirerek çalışır. Her yeni plak dişleri hareket ettirmek istediğimiz ideal pozisyona biraz daha yaklaştırır. Yeni plak takıldığında dişler yeni pozisyonuna adapte olana kadar plak sıkı olacak ve baskı yapacaktır. Bu durum 2 gün kadar sürdükten sonra plağınız pasif oturmaya başlayacaktır. Bundan sonra dişin yeni yerine adapte olması için yaklaşık 12 gün daha aynı plağın kullanılması gereklidir.
      </>
    ),
  },

  
];

const Faq = () => (
  <Section id="blog">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Ankara Şeffaf Plak Hakkında Bilgiler</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
