import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles =  [
      {
      "source": {
      "id": "engadget",
      "name": "Engadget"
      },
      "author": "Steve Dent",
      "title": "'Mystery Science Theater 3000' is back on a dedicated streaming platform",
      "description": "The world never run out of bad 'B' movies to mock, apparently, because Mystery Science Theater 3000 (MST3K) is back for a 13th season, Variety has reported. Thanks to a Kickstarter campaign last year that raised $6.52 million, a full 13-episode season of the …",
      "url": "https://www.engadget.com/mystery-science-theater-3000-is-back-on-the-gizmoplex-indie-streaming-platform-070504379.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-03/a4c9f120-ac03-11ec-9671-ab8b0407f27c",
      "publishedAt": "2022-03-25T07:05:04Z",
      "content": "The world never run out of bad 'B' movies to mock, apparently, because Mystery Science Theater 3000 (MST3K) is back for a 13th season, Variety has reported. Thanks to a Kickstarter campaign last year… [+1989 chars]"
      },
      {
      "source": {
      "id": "reuters",
      "name": "Reuters"
      },
      "author": null,
      "title": "Analysis: New EU rules regulating U.S. tech giants likely to set global standard - Reuters.com",
      "description": "Landmark EU rules targeting Alphabet <a href=\"https://www.reuters.com/companies/GOOGL.O\" target=\"_blank\">(GOOGL.O)</a> unit Google, Amazon <a href=\"https://www.reuters.com/companies/AMZN.O\" target=\"_blank\">(AMZN.O)</a>, Apple <a href=\"https://www.reuters.com/…",
      "url": "https://www.reuters.com/technology/new-eu-rules-regulating-us-tech-giants-likely-set-global-standard-2022-03-25/",
      "urlToImage": "https://www.reuters.com/resizer/9Ffttu0-0GFQcoTxssDG7-Gz364=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UCCHLGKVZBL3JDCTWAGYJS4CKE.jpg",
      "publishedAt": "2022-03-25T01:42:00Z",
      "content": "BRUSSELS, March 25 (Reuters) - Landmark EU rules targeting Alphabet (GOOGL.O) unit Google, Amazon (AMZN.O), Apple (AAPL.O), Meta (FB.O) and Microsoft (MSFT.O) are likely to set a global benchmark and… [+2995 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "CNET"
      },
      "author": "David Lumb",
      "title": "Apple's Next Green Initiative: Making the iPhone SE With Low-Carbon Aluminum - CNET",
      "description": "Making its iPhone SE out of aluminum smelted with reduced carbon emissions is another step toward more sustainable phones.",
      "url": "https://www.cnet.com/tech/mobile/apples-next-green-initiative-making-the-iphone-se-with-low-carbon-aluminum/",
      "urlToImage": "https://www.cnet.com/a/img/resize/dd2ea63455bb79c4931470fbdf61bf6061321dda/2022/03/14/49c00f4b-bb6c-470c-a82a-84f348b00f5e/iphone-se-2022-camera2-macro.jpg?auto=webp&fit=crop&height=630&width=1200",
      "publishedAt": "2022-03-25T00:44:24Z",
      "content": "Kevin Heinz/CNET\r\nApple's latest environmentally friendly endeavor will put more sustainably-made metal in its new iPhone SE models.\r\nThe aluminum, which is used in the metal frame around the sides o… [+702 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Hindustan Times"
      },
      "author": "Himani Jha",
      "title": "Green iPhone 13 Pro price drop rolled out! Cheaper by 23000, know how to get it - HT Tech",
      "description": "<ol><li>Green iPhone 13 Pro price drop rolled out! Cheaper by 23000, know how to get it  HT Tech\r\n</li><li>Fido 'Clearance' Pricing Hits Apple's iPhone 12 and iPhone 11 Lineup  iPhone in Canada\r\n</li><li>Apple iPhone 13 Exchange And Cashback Offer: Here’s How…",
      "url": "https://tech.hindustantimes.com/mobile/news/green-iphone-13-pro-price-drop-rolled-out-cheaper-by-23000-know-how-to-get-it-71648186036479.html",
      "urlToImage": "https://images.hindustantimes.com/tech/img/2022/03/25/1600x900/Apple-iPhone13-Pro-alpine-green-hero-2up-220308_big_carousel.jpg.large_1646909085170_1648186667539.jpg",
      "publishedAt": "2022-03-25T05:39:34Z",
      "content": "Apple premium reseller iStore India is giving away an exciting deal on the green iPhone 13 Pro. The tech giant has recently introduced two new colour shades to iPhone 13 series - Green and Alpine Gre… [+1573 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Hipertextual"
      },
      "author": "Luis Miranda",
      "title": "La Ley de Mercados Digitales aprueba la interoperabilidad de WhatsApp, iMessage y Facebook Messenger con otros clientes de mensajería",
      "description": "Tras ocho horas de negociación, legisladores de la Unión Europea lograron un acuerdo de cara a la aprobación de la Ley de Mercados Digitales (DMA). La nueva legislación buscará poner fin a las prácticas abusivas de empresas como Google, Meta, Apple o Amazon, …",
      "url": "https://hipertextual.com/2022/03/ley-de-mercados-digitales-interoperabilidad-whatsapp-imessage-facebook-messenger",
      "urlToImage": "https://hipertextual.com/wp-content/uploads/2022/03/whatsapp-messenger-imessage.jpg",
      "publishedAt": "2022-03-25T00:49:25Z",
      "content": "Tras ocho horas de negociación, legisladores de la Unión Europea lograron un acuerdo de cara a la aprobación de la Ley de Mercados Digitales (DMA). La nueva legislación buscará poner fin a las prácti… [+2734 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Gutenberg.org"
      },
      "author": null,
      "title": "Roman Catholic Priest: 30 Yrs in 17c France, Published Posthumous Atheistic Book",
      "description": "Comments",
      "url": "https://www.gutenberg.org/files/17607/17607-h/17607-h.htm",
      "urlToImage": null,
      "publishedAt": "2022-03-25T01:21:04Z",
      "content": "Project Gutenberg's Superstition In All Ages (1732), by Jean Meslier\r\nThis eBook is for the use of anyone anywhere at no cost and with\r\nalmost no restrictions whatsoever. You may copy it, give it awa… [+518929 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "heise online"
      },
      "author": "Frank Schräer",
      "title": "Bericht: Apple will iPhones über Abo-Modelle anbieten",
      "description": "Monatlich statt einmal zahlen: Das könnte das nächste Finanzierungsmodell von Apple werden, um iPhones und iPads abzusetzen und Kunden an sich zu binden.",
      "url": "https://www.heise.de/news/Bericht-Apple-will-iPhones-ueber-Abo-Modelle-anbieten-6628608.html",
      "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/4/1/7/8/7/0/Apple_Logo-f38daf49a7a581d3.jpg",
      "publishedAt": "2022-03-25T02:21:00Z",
      "content": "Apple plant angeblich neue Wege für Kunden, iPhones zu nutzen. Durch Abonnementmodelle können die Nutzer monatlich für neue Hardware zahlen, statt sie einmalig zu kaufen. Dies soll unabhängig sein vo… [+2292 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "heise online"
      },
      "author": "Frank Schräer",
      "title": "Freitag: Apple iPhones im Abo, britische Teenager als Cyber-Kriminelle",
      "description": "Abomodell für iPhones + Teenager als Hacker festgenommen + Speichernot in Russland + PHEV-Effizienz-Studie + Körperfunktionen ohne Gehirn + Datenschutz-Podcast",
      "url": "https://www.heise.de/news/Freitag-Apple-iPhones-im-Abo-britische-Teenager-als-Cyber-Kriminelle-6629442.html",
      "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/4/1/8/7/0/2/freitag-67919a34438fca1d.webp",
      "publishedAt": "2022-03-25T05:30:00Z",
      "content": "Apple will seine iPhones wohl zusätzlich auch als Abonnement unter die Leute bringen. Statt die Geräte komplett zu kaufen oder in Raten abzubezahlen, soll es angeblich zukünftig ein Abo-Modell mit mo… [+4075 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "9to5Mac"
      },
      "author": "Filipe Espósito",
      "title": "Apple Maps expands detailed 3D buildings and enhanced navigation to Canada",
      "description": "Apple on Thursday announced that it is bringing the new Apple Maps experience with detailed 3D buildings and enhanced navigation to Canada. The new maps, which were built from scratch, will be available in selected Canadian cities.\n more…\nThe post Apple Maps …",
      "url": "https://9to5mac.com/2022/03/24/apple-maps-expands-detailed-3d-buildings-and-enhanced-navigation-to-canada/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/03/apple-maps-canada.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2022-03-25T02:02:29Z",
      "content": "Apple on Thursday announced that it is bringing the new Apple Maps experience with detailed 3D buildings and enhanced navigation to Canada. The new maps, which were built from scratch, will be availa… [+1629 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "9to5Mac"
      },
      "author": "Benjamin Mayo",
      "title": "How to watch Pachinko on Apple TV+",
      "description": "The international epic drama series Pachinko debuts today on Apple TV+. Pachinko tells the story of a Korean family who immigrate to Japan in the 20th century, at a time when Japanese attitudes towards Koreans was far from amicable. The first three episodes a…",
      "url": "https://9to5mac.com/2022/03/24/how-to-watch-pachinko-on-apple-tv/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/03/pachinko-how-to-watch.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2022-03-25T04:56:00Z",
      "content": "The international epic drama series Pachinko debuts today on Apple TV+. Pachinko tells the story of a Korean family who immigrate to Japan in the 20th century, at a time when Japanese attitudes towar… [+2511 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "9to5Mac"
      },
      "author": "Filipe Espósito",
      "title": "EU legislation to make iMessage and other messaging apps interoperable",
      "description": "The European Union on Thursday night unveiled more details about its plans to curb anti-competitive practices among big tech companies. With the rules of the new Digital Markets Act (DMA), Europe wants all major messaging apps like WhatsApp, Facebook Messenge…",
      "url": "https://9to5mac.com/2022/03/24/eu-legislation-to-make-imessage-and-other-messaging-apps-interoperable/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2017/05/imessage-waiting-for-activation.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2022-03-25T02:57:08Z",
      "content": "The European Union on Thursday night unveiled more details about its plans to curb anti-competitive practices among big tech companies. With the rules of the new Digital Markets Act (DMA), Europe wan… [+2160 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (Amber Neely)",
      "title": "Canada sees Apple Maps expansion in Toronto, Vancouver, and Montreal",
      "description": "Apple has begun rolling out new experiences for Apple Maps in select Canadian cities, with unique 3D landmarks and enhanced navigation features.When iOS 15 launched, Apple announced that Apple Maps would gain a few new features — chiefly, unique 3D landmarks,…",
      "url": "https://appleinsider.com/articles/22/03/25/canada-sees-apple-maps-expansion-in-toronto-vancouver-and-montreal",
      "urlToImage": "https://photos5.appleinsider.com/gallery/47633-92995-headerx-xl.jpg",
      "publishedAt": "2022-03-25T03:03:08Z",
      "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1548 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (Amber Neely)",
      "title": "New 15-inch MacBook may not be MacBook Air, says Kuo",
      "description": "Ming-Chi Kuo predicts Apple will add a new 15-inch MacBook to its lineup but believes that the model may not be another MacBook Air, and it won't arrive for well over a year.A report on Wednesday claimed that Apple may be bringing a 15-inch MacBook to market …",
      "url": "https://appleinsider.com/articles/22/03/25/new-15-inch-macbook-may-not-be-macbook-air-says-kuo",
      "urlToImage": "https://photos5.appleinsider.com/gallery/47548-92825-46342-90404-MacBook-Air-colors-2-xl-xl.jpg",
      "publishedAt": "2022-03-25T00:29:40Z",
      "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1785 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (Amber Neely)",
      "title": "EU to require iMessage, WhatsApp to communicate with smaller messaging services",
      "description": "On Thursday, the European Union announced plans to enact new legislation that would demand major messaging services — including iMessage, WhatsApp, and Facebook Messenger — to send and receive messages, calls, videos, and files from smaller competitors.The ru…",
      "url": "https://appleinsider.com/articles/22/03/25/eu-to-require-imessage-whatsapp-to-communicate-with-smaller-messaging-services",
      "urlToImage": "https://photos5.appleinsider.com/gallery/46986-91547-44980-87442-41641-80732-40207-77368-39182-74959-36715-68590-European-Commission-xl-xl-xl-xl-xl-xl.jpg",
      "publishedAt": "2022-03-25T04:04:45Z",
      "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+2158 chars]"
      },
      {
      "source": {
      "id": "engadget",
      "name": "Engadget"
      },
      "author": "Kiyoshi Tane",
      "title": "「iPhoneをデジタル免許証に」が米アリゾナ州で初の導入。他の州にも広がる見通し",
      "description": "アップルは23日、米アリゾナ州でiPhoneやApple Watchをデジタル免許証として利用可能になったと発表しました、",
      "url": "https://japanese.engadget.com/arizona-first-state-allow-apple-wallet-digital-id-030046108.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-03/7855a300-ab59-11ec-afff-94fec79c0189",
      "publishedAt": "2022-03-25T03:00:46Z",
      "content": "iOS 1523\r\niPhoneTSA\r\nApple PayApple WalletWalletIDiPhoneApple WatchID\r\n9\r\n7\r\nWalletIDFace ID\r\niPhoneApple WatchID\r\niOS 15.4 iPhone 8 watchOS 8.4 Apple Watch Series 4 \r\nTSATSA\r\nSource:Apple"
      },
      {
      "source": {
      "id": "engadget",
      "name": "Engadget"
      },
      "author": "Kiyoshi Tane",
      "title": "macOS 12.3アプデ後にゲームコントローラー動作がおかしい報告が複数",
      "description": "先週macOS 12.3が配信開始されましたが、アップデートした一部のMacユーザーからゲームコントローラーに不具合が生じていると報告されています。",
      "url": "https://japanese.engadget.com/game-controller-broken-on-macos-montrey-123-034034439.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-03/53a94930-abe0-11ec-bff7-bcfa30926661",
      "publishedAt": "2022-03-25T03:40:34Z",
      "content": "macOS 12.3Mac\r\nApple Developer ForumsRedditXboxPlayStationBluetooth\r\nWebXbox Cloud Gaming\r\nApple Developer ForumsNIMBUS+ macOS 12.3Apple ArcadeBluetoothMac\r\nSteamThe Pathless Asphalt 8+ Agent Interce… [+65 chars]"
      },
      {
      "source": {
      "id": "engadget",
      "name": "Engadget"
      },
      "author": "Munenori Taniguchi",
      "title": "Google、Fitbitの不整脈監視技術をFDAに認可申請。Apple Watchより高精度との研究結果",
      "description": "Googleが、ユーザーの心拍を受動的に監視する技術のデータを米食品医薬品局(FDA)に提出、審査申請したことを明らかにしました",
      "url": "https://japanese.engadget.com/google-applies-to-the-fda-fitbits-passive-heart-rate-monitoring-060048766.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-03/7046ed80-abf0-11ec-8d87-cb8a2a4da317",
      "publishedAt": "2022-03-25T06:00:48Z",
      "content": "Google(FDA)Google98%\r\n(PPG)\r\nFItbitGoogle2020501%500010001/398%2021\r\nApple Watch84%FitbitTony Faranesh\r\nFDAFaraneshFitbitApple WatchFitbit\r\nSourceGoogle"
      },
      {
      "source": {
      "id": "engadget",
      "name": "Engadget"
      },
      "author": "Kiyoshi Tane",
      "title": "アップル、iPhone等のハードウェア製品を月額料金で使えるサブスクを準備中の噂",
      "description": "アップルがiCloudやApple Musicのように、ユーザーが月額料金を支払ってiPhoneやその他のハードウェア製品を利用できるサブスクリプションを準備中との噂が報じられています。",
      "url": "https://japanese.engadget.com/apple-developing-hardware-subscription-020034281.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-03/673b63b0-abd2-11ec-bdff-6c90f6a493e1",
      "publishedAt": "2022-03-25T02:00:34Z",
      "content": "iCloudApple MusiciPhone\r\nBloombergiPhoneiPadMac\r\niCloudApple MusicApple IDApp Store\r\niPhoneiPhone112242iPhone\r\nApple OneAppleCareiPhoneApp Store\r\nBloombergApple Paybuy now, pay laterApple\r\n20222023\r\n… [+49 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Journal du geek"
      },
      "author": "Thomas Estimbre",
      "title": "iPhone SE 2022 : Petit mais aussi solide que les iPhone 13",
      "description": "L’iPhone SE 2022 tient ses promesses en matière de solidité. Un drop test démontre qu’il est presque aussi résistant que l’iPhone 13.\niPhone SE 2022 : Petit mais aussi solide que les iPhone 13",
      "url": "https://www.journaldugeek.com/2022/03/25/iphone-se-2022-petit-mais-aussi-solide-que-les-iphone-13/",
      "urlToImage": "https://www.journaldugeek.com/content/uploads/2022/03/iphone-se-2022-chutes.jpg",
      "publishedAt": "2022-03-25T07:00:12Z",
      "content": "LiPhone SE 2022 tient ses promesses en matière de solidité. Un drop test démontre quil est presque aussi résistant que liPhone 13.LiPhone SE 2022 dévoilé par Apple fait couler beaucoup dencre depuis … [+2827 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "MakeUseOf"
      },
      "author": "Gabriela Vatu",
      "title": "You Can Now Play Random Episodes on HBO Max Using \"Shuffle\"",
      "description": "HBO Max has introduced a shuffle button for select TV shows on its streaming platform. Use it to play random episodes when you want to kill time.",
      "url": "https://www.makeuseof.com/hbo-max-shuffle-play-random-episodes/",
      "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/03/HBO-Max-Shuffle-Button-on-Friends-page.jpg",
      "publishedAt": "2022-03-25T06:14:48Z",
      "content": "HBO Max has introduced a new Shuffle button to help you watch random episodes of some of its most popular shows. While this isn't the first time we've heard of a Shuffle button on a video streaming p… [+4169 chars]"
      }
    ]

  constructor(){
    super()
    console.log("Hello I am News Constructor")
    this.state={
        articles:this.articles,
        loading:false
    }
  }
  render() {
    return (
        <div className="container my-3">
          <h2>NewsApp - Top Headlines</h2>          
          <div className="row">
          {
              this.state.articles.map((element)=>
              {
                  return <div className="col-md-4" key={element.url}>
                      <NewsItem title={element.title.slice(0,15)} description={element.description.slice(0,30)} 
                      imageurl={element.urlToImage} newsUrl={element.url}/>                
                  </div>
              })
          }
          </div>          
        </div>
    )
  }
}

export default News;
