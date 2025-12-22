// Mock Ticket Data
const tickets = [
    {
        no: "110",
        updated: "2025-12-22 10:30 AM",
        type: "Software Issue",
        detail: "Photoshop crashing on startup for the design team.",
        status: "Resolved",
        priority: "Medium",
        alert: "Completed"
    },
    {
        no: "111",
        updated: "2025-12-22 11:15 AM",
        type: "Hardware Failure",
        detail: "Printer in Hub B is not responding to network requests.",
        status: "Pending",
        priority: "High",
        alert: "On Track"
    },
    {
        no: "112",
        updated: "2025-12-22 01:45 PM",
        type: "Access Request",
        detail: "New developer needs access to the main SVN repository.",
        status: "Assigned",
        priority: "Urgent",
        alert: "Overdue"
    },
    {
        no: "113",
        updated: "2025-12-22 02:20 PM",
        type: "IT Request",
        detail: "Request for a dual monitor setup for the finance department.",
        status: "Pending",
        priority: "Medium",
        alert: "On Track"
    },
    {
        no: "114",
        updated: "2025-12-22 02:45 PM",
        type: "Web Support",
        detail: "Corporate website home page banner is misaligned on mobile.",
        status: "Assigned",
        priority: "High",
        alert: "Warning"
    }
];

// Function to render tickets
function renderTickets(ticketData) {
    const list = document.getElementById('ticketList');
    list.innerHTML = '';

    ticketData.forEach(ticket => {
        const row = document.createElement('tr');
        
        // Status Badge Logic
        let statusClass = '';
        switch(ticket.status.toLowerCase()) {
            case 'resolved': statusClass = 'badge-resolved'; break;
            case 'pending': statusClass = 'badge-pending'; break;
            case 'assigned': statusClass = 'badge-assigned'; break;
            case 'urgent': statusClass = 'badge-urgent'; break;
        }

        // Priority Icon Logic
        let priorityColor = '#94a3b8'; // Default
        if(ticket.priority === 'High') priorityColor = '#f59e0b';
        if(ticket.priority === 'Urgent') priorityColor = '#ef4444';
        if(ticket.priority === 'Medium') priorityColor = '#3b82f6';

        row.innerHTML = `
            <td style="font-weight: 700; color: var(--accent-blue);">#${ticket.no}</td>
            <td style="font-size: 0.85rem; color: var(--text-secondary);">${ticket.updated}</td>
            <td>
                <div style="font-weight: 600;">${ticket.type}</div>
                <div style="font-size: 0.75rem; color: var(--text-secondary);">Enterprise Suite</div>
            </td>
            <td style="max-width: 300px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                ${ticket.detail}
            </td>
            <td><span class="badge ${statusClass}">${ticket.status}</span></td>
            <td>
                <span class="priority-icon" style="background: ${priorityColor}"></span>
                ${ticket.priority}
            </td>
            <td>
                <div style="font-size: 0.8rem; color: ${ticket.alert === 'Overdue' ? 'var(--danger)' : 'var(--text-secondary)'}">
                    ${ticket.alert}
                </div>
            </td>
        `;
        
        list.appendChild(row);
    });
}

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderTickets(tickets);

    // Tab Switching Logic
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            // Here you would normally filter the data
        });
    });

    // New Ticket Button
    document.getElementById('btnNewTicket').addEventListener('click', () => {
        alert('Opening New Ticket Form...');
        // Mocking adding a new ticket
        const newNo = parseInt(tickets[tickets.length - 1].no) + 1;
        const newTicket = {
            no: newNo.toString(),
            updated: "Just now",
            type: "General Support",
            detail: "New ticket created for testing.",
            status: "Pending",
            priority: "Medium",
            alert: "On Track"
        };
        tickets.unshift(newTicket);
        renderTickets(tickets);
    });
});
