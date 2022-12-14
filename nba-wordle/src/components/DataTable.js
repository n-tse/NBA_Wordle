import React from 'react'
import JsonData from '../Data.json'

function JsonDataDisplay(){
	const DisplayData=JsonData.map(
		(info)=>{
			return(
				<tr>
					<td>{info.first_name}</td>
					<td>{info.last_name}</td>
          <td>{info.team.full_name}</td>
				</tr>
			)
		}
	)

	return(
		<div>
			<table class="table table-striped">
				<thead>
					<tr>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Team</th>
					</tr>
				</thead>
				<tbody>
				
					
					{DisplayData}
					
				</tbody>
			</table>
			
		</div>
	)
}

export default JsonDataDisplay;
