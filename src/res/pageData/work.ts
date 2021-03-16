import LegalForce from '../img/legalforce.png'
import DMM from '../img/dmm.png'

const pageData: Array<WorkPageData> = [
  { 
    date: '2021/4', 
    company: '株式会社LegalForce',
    description: `

    `,
    thumbnail: LegalForce,
    projects: [
      {
        title: '未定',
        position: 'フロントエンド',
        description: `
        TBA
        `,
      }
    ]
  },
  { 
    date: '2017/4 - 2021/3',
    company: '合同会社DMM.com',
    description: `

    `,
    thumbnail: DMM,
    projects: [
      {
        title: 'オンラインサロン専用コミュニティプラットフォーム',
        position: 'フロントエンド・デザイン',
        description: `
        有名人やある分野に詳しいユーザーがオンラインで専用のクローズド・コミュニティを開くことが出来るサービス。
        利用可能なプラットフォームとしてweb・iOSを提供しており、立ち上げの新規機能開発から急成長の時期まで両方のフロントエンド及びUIデザインを担当。
        `,
      },
      {
        title: 'Salon LIVE',
        position: 'フロントエンド・デザイン',
        description: `
        オンラインサロンのコミュニティ内でライブ配信が出来るネイティブアプリのUI・UXデザイン及びプログラミングを担当。
        `,
      },
    ]
  },
]

export default pageData
