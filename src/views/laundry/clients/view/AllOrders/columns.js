// ** React Imports
import moment from 'moment'
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { Badge, UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
import { Send, CheckCircle, Save, ArrowDownCircle, Info, PieChart } from 'react-feather'

const getItemNames = (items) => {
	const arr = []
	console.log(items)
	items.forEach((item) => {
		arr.push(item.name)
	})
	const string = arr.join(', ')
	if (string.length < 35) return string
	return `${string.substring(0, 35)}...`
}
const statusObj = {
	pending: 'light-warning',
	delivered: 'light-success',
}

// ** Table columns
export const columns = [
	{
		name: 'Order ID',
		minWidth: '180px',
		selector: 'orderNumber',

		cell: (row) => (
			<Link to={`/order/preview/${row.id}`}>
				<span>#{row.orderNumber}</span>
			</Link>
		),
	},
	{
		name: 'Amount',
		selector: 'amount',
		sortable: true,
		minWidth: '150px',
		cell: (row) => <span>{(row.amount || 0).toLocaleString('en-US', { style: 'currency', currency: 'NGN' })}</span>,
	},
	{
		name: 'Amount Paid',
		width: '150px',
		selector: 'amountPaid',
		sortable: true,
		cell: (row) => <span className="text-capitalize">{(row?.amountPaid || 0)?.toLocaleString('en-US', { style: 'currency', currency: 'NGN' })}</span>,
	},
	{
		name: 'Balance',
		width: '150px',
		selector: 'balance',
		sortable: true,
		cell: (row) => <span className="text-capitalize">{(row?.balance || 0)?.toLocaleString('en-US', { style: 'currency', currency: 'NGN' })}</span>,
	},
	{
		name: 'Order Status',
		width: '150px',
		selector: 'orderStatus',
		sortable: true,
		cell: (row) => (
			<Badge className="text-capitalize" color={statusObj[row.orderStatus]} pill>
				{row.orderStatus}
			</Badge>
		),
	},
	{
		name: 'Date',
		selector: 'createdAt',
		sortable: true,
		minWidth: '200px',
		cell: (row) => moment(row.createdAt).format('lll'),
	},
	{
		name: 'Initiated By',
		minWidth: '200px',
		selector: 'admin',
		sortable: true,
		cell: (row) => <span className="font-weight-bold">{row.user.firstName}</span>,
	},
]
