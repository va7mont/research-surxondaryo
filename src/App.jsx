import StackedBarChart from './components/stackedBarChart.jsx'
import screenshot01 from './assets/images/01.png'
import screenshot02 from './assets/images/02.png'
import screenshot03 from './assets/images/03.png'
import screenshot03_1 from './assets/images/03_1.png'
import screenshot04 from './assets/images/04.png'
import screenshot04_1 from './assets/images/04_1.png'
import screenshot04_2 from './assets/images/04_2.png'
import screenshot05 from './assets/images/05.png'
import screenshot05_1 from './assets/images/05_1.png'
import screenshot06 from './assets/images/06.png'
import screenshot07 from './assets/images/07.png'
import screenshot08 from './assets/images/08.png'
import screenshot08_1 from './assets/images/08_1.png'
import screenshot09 from './assets/images/09.png'

import data01 from './data/01.json'
import data02 from './data/02.json'
import data03 from './data/03.json'
import data04 from './data/04.json'
import data06 from './data/06.json'
import data07 from './data/07.json'
import data08 from './data/08.json'
import data09 from './data/09.json'

function App() {

  return (
    <div>
      <img src={screenshot01} alt="screenshot"/>
      <StackedBarChart data={data01.result}
                       title={'Qamoqqa olingan maktab direktori va hokim mojarosi. O‘qituvchilar qadri shu bo‘ldimi?'}/>
      <img src={screenshot02} alt="screenshot"/>
      <StackedBarChart data={data02.result}
                       title={'Surxondaryo hokimi yig‘ilishida hokimdan adolat talab qilgan maktab direktori qamoqqa olingani maʼlum bo‘ldi'}/>
      <div style={{display: 'flex', alignItems: 'baseline'}}>
        <img src={screenshot03} alt="screenshot"/>
        <img src={screenshot03_1} alt="screenshot"/>
      </div>
      <StackedBarChart data={data03.result}
                       title={'Hokim bilan janjallashgan direktor ayovsiz kaltaklangani aytilmoqda.'}/>
      <div style={{display: 'flex', alignItems: 'baseline'}}>
        <img src={screenshot04} alt="screenshot"/>
        <img src={screenshot04_1} alt="screenshot"/>
        <img src={screenshot04_2} alt="screenshot"/>
      </div>
      <StackedBarChart data={data04.result}
                       title={'Toʻra Bobolov boshqa ishga oʻtishi munosabati bilan Surxondaryo viloyati hokimi lavozimidan ozod etildi'}/>
      <div style={{display: 'flex', alignItems: 'baseline'}}>
        <img src={screenshot05} alt="screenshot"/>
        <img src={screenshot05_1} alt="screenshot"/>
      </div>
      <img src={screenshot06} alt="screenshot"/>
      <StackedBarChart data={data06.result}
                       title={'Surxondaryo viloyati Jarqoʻrgʻon tumani hokimi oylik ish haqqidan 40 foiz jarimaga tortildi\n'}/>
      <img src={screenshot07} alt="screenshot"/>
      <StackedBarChart data={data07.result}
                       title={'Surxondaryoda 28-maktab direktori Umida Tursunova kaltaklab ketilgani aytilgan videolar ijtimoiy tarmoqlarda tarqaldi. Surxondaryo viloyati hokimi Ulug‘bek Qosimov Umida Tursunovaning holidan xabar olish uchun shifoxonaga bordi.'}/>
      <div style={{display: 'flex', alignItems: 'baseline'}}>
        <img src={screenshot08} alt="screenshot"/>
        <img src={screenshot08_1} alt="screenshot"/>
      </div>
      <StackedBarChart data={data08.result}
                       title={'Prezident Ulugʻbek Qosimovni Surxondaryo viloyati hokimi lavozimiga tayinlash toʻgʻrisidagi farmonni imzoladi'}/>
      <img src={screenshot09} alt="screenshot"/>
      <StackedBarChart data={data09.result}
                       title={'Surxondaryo viloyati hokimi senator boʻldi'}/>
    </div>
  )
}

export default App
