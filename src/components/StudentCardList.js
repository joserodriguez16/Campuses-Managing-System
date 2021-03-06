import '../styles/StudentCardList.css';
import StudentCard from './StudentCard';

function StudentCardList(props){

	let component = props.students.map((student,i) => {

		return(
			<div>
				<StudentCard key={i} />
			</div>
			);

	});

	return(
		<div className='cardlist-container'>
			{component}
		</div>
	);
}
export default StudentCardList;