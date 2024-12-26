# Çekiliş Sistemi

Bu proje, **Vue 3**, **TypeScript**, **Pinia**, **SASS** ve **Vite** kullanarak geliştirilmiş bir **çekiliş sistemidir**. Kullanıcılar katılımcı ekleyebilir, çekilişi başlatabilir, kazananları görüntüleyebilir ve belirli bir sayıda kazanan seçebilir. Ayrıca, katılımcılar listeden silinebilir ve kazananlar için konfeti efekti gösterilebilir.

## Teknolojiler

- **Vue 3**: Modern JavaScript framework'ü, kullanıcı arayüzü geliştirme için kullanıldı.
- **TypeScript**: JavaScript'in güçlü tür sistemi, kodun güvenliğini artırmak için kullanıldı.
- **Pinia**: Vue 3 için state management çözümü. Uygulama durumunun yönetilmesi için kullanıldı.
- **Vite**: Hızlı geliştirme ve üretim derlemeleri için kullanılan build aracı.
- **SASS**: CSS preprocessor'ı. Daha modüler ve yönetilebilir stil dosyaları oluşturmak için kullanıldı.

## Özellikler

- **Katılımcı Ekleme**: Kullanıcılar tek tek ya da çoklu katılımcıyı ekleyebilir.
- **Çekiliş Başlatma**: Kullanıcılar belirli bir süre içinde çekilişi başlatabilir ve kazananlar rastgele seçilir.
- **Kazanan Sayısı Belirleme**: Kullanıcı, çekilişte kaç kazanan olacağını belirleyebilir.
- **Katılımcı Silme**: Katılımcıların yanındaki silme butonuyla listeye eklenen katılımcılar silinebilir.
- **Kazananlar**: Kazananlar ekranda gösterilir ve konfeti efektiyle kutlanır.
- **Kazanan Sayısı Gösterme**: Çekiliş sonucu kazanan sayısı ekranda gösterilir.

## Kullanıcı Arayüzü
### Katılımcı Ekleme
- Tek bir katılımcıyı yazıp Ekle butonuna basarak katılımcılar eklenebilir.
- Aynı zamanda, birden fazla katılımcı, her satıra bir isim gelecek şekilde eklenebilir ve Toplu Ekle butonuna basarak bu katılımcılar listeden eklenir.
### Çekiliş Ayarları
- Çekiliş Süresi: Kullanıcı, çekilişin ne kadar süreceğini belirleyebilir.
- Kazanan Sayısı: Kullanıcı, kaç kazanan seçileceğini belirler.
- Kazananı Listeden Çıkarma: Çekilişi kazanan katılımcı listeden çıkarılabilir.
- Başlat ve İptal: Çekiliş başlatılabilir ve iptal edilebilir.
### Çekiliş Sonucu
- Çekiliş tamamlandığında kazananlar ekranda listelenir.
- Kazananların sayısı, kullanıcı tarafından belirtilen sayı kadar olacaktır.


## Projeyi Çalıştırma

### 1. Projeyi Klonlayın

Öncelikle, projeyi bilgisayarınıza indirin.

### 2. Bağımlılıkları Yükleyin

```bash
npm install
```
veya
```bash
yarn install
```
### 3. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```
veya

```bash
yarn dev
```


## Proje Yapısı
Proje aşağıdaki gibi bir yapıya sahiptir:

```bash
src/
├── components/
│   ├── AddParticipant.vue     # Katılımcı ekleme bileşeni
│   ├── ParticipantsList.vue   # Katılımcı listesi bileşeni
│   └── WinnersSection.vue     # Çekiliş ayarları ve kazananlar bileşeni
├── store/
│   └── raffleStore.ts         # Pinia store dosyası
└── assets/                    # Görseller ve diğer statik dosyalar
└── App.vue                    # Ana Vue bileşeni
└── main.ts                    # Ana giriş dosyası
```

## Katkıda Bulunma
### Bu projeye katkıda bulunmak isterseniz:
- Projeyi fork yapın.
- Yeni bir branch oluşturun.
- Değişikliklerinizi yapın ve pull request göndermek için branch'inizi kullanın.
