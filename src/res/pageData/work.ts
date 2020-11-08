import CVThumbnail from '../img/work/cv.png'
import CVImage1 from '../img/workDetail/cv_1.png'
import CVImage2 from '../img/workDetail/cv_2.png'
import CVImage3 from '../img/workDetail/cv_3.png'
import CVImage4 from '../img/workDetail/cv_4.png'
import GoalShareThumbnail from '../img/work/goalshare.png'

const pageData: Array<WorkPageData> = [
  { 
    type: 'design', 
    title: 'Curriculum Vitae', 
    description: `
      A page to display and show off the little work I have been able to conjure up.

      With this one I went for a minimalistic (if that is even a word) approach, only using three colors and bold shapes.
      The finished product can be seen right here, on this very page. 

      As for the programming side of things, I took this as a challenge to immerse myself into TypeScript. 
      Being awoken to the marvel of types, due to the time spent writing Swift, I wanted to test if TS could measure up to Swift.
    `,
    figmaFileUrl: 'https://www.figma.com/file/ZhHWLr8SrrVPFG3yOUgyB5/Curriculum-Vitae?node-id=1%3A2',
    thumbnail: CVThumbnail,
    images: [CVImage1, CVImage2, CVImage3, CVImage4]
  },
  { 
    type: 'design',
    title: 'GoalShare',
    description: `

    `,
    thumbnail: GoalShareThumbnail,
    images: []
  },
]

export default pageData
