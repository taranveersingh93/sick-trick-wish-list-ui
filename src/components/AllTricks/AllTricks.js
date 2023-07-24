import './AllTricks.css'
import TrickCard from '../TrickCard/TrickCard';

const AllTricks = ({tricks}) => {
  console.log(tricks)
  const tricksCode = tricks.map(trick => {
    return (<TrickCard stance={trick.stance} obstacle={trick.obstacle} name={trick.name} tutorial={trick.tutorial} id={trick.id} key={trick.id}/>)
  })
  return (
    <section className='tricks-container'>
      {tricksCode}
    </section>
  )
}

export default AllTricks;
