// Main application logic
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the app
    initApp();
    // Sample data - in a real app, this would come from a database
    const sampleContractors = [
        {
            tradeCategory: "Scaffolding",
            companyName: "Midas Scaffolding",
            primaryContact: "Ronni",
            email: "ronni@midasscaffolding.co.uk",
            phone: "07735 797764",
            coverageArea: "London",
            priorityStatus: "PRIMARY",
            coreServices: "scaffolding,access,temporary works,facade access,fire door access,roof access",
            notes: "Always first scaffolding contractor contacted"
        },
        {
            tradeCategory: "Scaffolding",
            companyName: "MW Scaffolding UK Ltd",
            primaryContact: "Office",
            email: "office@mwscaff.co.uk",
            phone: "020 8965 4000",
            coverageArea: "London",
            priorityStatus: "Escalation",
            coreServices: "scaffolding,access,public sector scaffolding,CHAS,SafeContractor",
            notes: "Use for high-compliance or public-sector jobs"
        },
        {
            tradeCategory: "Scaffolding",
            companyName: "Maddison Scaffolding Ltd",
            primaryContact: "Remy Stewart",
            email: "info@maddisonscaffolding.co.uk",
            phone: "0800 061 4701",
            coverageArea: "UK",
            priorityStatus: "Escalation",
            coreServices: "scaffolding,access,constructionline gold,CHAS,high-risk scaffolding",
            notes: "Top-tier compliance scaffolding"
        },
        {
            tradeCategory: "Fire & Life Safety",
            companyName: "BBAS",
            primaryContact: "Operations Team",
            email: "here@bbfiresecurity.com",
            phone: "",
            coverageArea: "UK",
            priorityStatus: "Immediate",
            coreServices: "fire alarm,emergency lighting,AOV,smoke ventilation,testing,maintenance,certification",
            notes: "Can be contacted immediately for active fire systems"
        },
        {
            tradeCategory: "Fire & Life Safety",
            companyName: "ARK Fire Protection Ltd",
            primaryContact: "Sales Team",
            email: "",
            phone: "",
            coverageArea: "UK",
            priorityStatus: "PRIMARY",
            coreServices: "passive fire,fire stopping,compartmentation,fire doors,surveys,remedials",
            notes: "First call for all passive fire works"
        },
        {
            tradeCategory: "Fire & Life Safety",
            companyName: "Protest ES Ltd",
            primaryContact: "Office",
            email: "",
            phone: "",
            coverageArea: "UK",
            priorityStatus: "Escalation",
            coreServices: "emergency lighting,EICR,electrical compliance,fire alarm testing",
            notes: "Escalation if ARK cannot cover or EL-only works"
        },
        {
            tradeCategory: "Fire & Life Safety",
            companyName: "ADL Group",
            primaryContact: "CJ Kesselman",
            email: "cj@adlgroup.uk",
            phone: "020 8248 4011",
            coverageArea: "London",
            priorityStatus: "Approved",
            coreServices: "AOV,smoke ventilation,fire alarm testing,emergency lighting",
            notes: "Strong AOV specialist"
        },
        {
            tradeCategory: "Fire & Life Safety",
            companyName: "Prime Fire & Security",
            primaryContact: "Eren Ahmet",
            email: "eren@primefiresecurity.co.uk",
            phone: "07899 097142",
            coverageArea: "London",
            priorityStatus: "Approved",
            coreServices: "fire alarm,emergency lighting,fire door inspections",
            notes: "Use where AOV complexity is low"
        },
        {
            tradeCategory: "Fire & Life Safety",
            companyName: "Bilginatwork Ltd",
            primaryContact: "Bilgin Unal",
            email: "bilgin@bilginatwork.co.uk",
            phone: "07876 180168",
            coverageArea: "London",
            priorityStatus: "Approved",
            coreServices: "fire alarm testing,emergency lighting testing,certification",
            notes: "Fire alarm + EL only"
        },
        {
            tradeCategory: "Electrical",
            companyName: "Mark Sparks Electrical Ltd",
            primaryContact: "",
            email: "",
            phone: "",
            coverageArea: "West London",
            priorityStatus: "Approved",
            coreServices: "electrical repairs,small works,testing,EICR",
            notes: "Reactive local electrical contractor"
        },
        {
            tradeCategory: "Landscaping & Grounds",
            companyName: "John King Landscaping",
            primaryContact: "John King",
            email: "",
            phone: "07714 200580",
            coverageArea: "Herts / North London",
            priorityStatus: "Approved",
            coreServices: "landscaping,paving,patios,drainage,fencing,turfing",
            notes: "Hard & soft landscaping"
        },
        {
            tradeCategory: "Landscaping & Grounds",
            companyName: "AMC Paving & Building Ltd",
            primaryContact: "Anthony Casey",
            email: "info@amcpavingandbuildingltd.com",
            phone: "0208 938 3880",
            coverageArea: "London & Home Counties",
            priorityStatus: "Approved",
            coreServices: "driveways,paving,patios,brickwork,fencing,landscaping",
            notes: "Large hard landscaping projects"
        },
        {
            tradeCategory: "Landscaping & Grounds",
            companyName: "Branchwalkers Tree Surgery Ltd",
            primaryContact: "",
            email: "",
            phone: "",
            coverageArea: "NW London",
            priorityStatus: "Approved",
            coreServices: "tree surgery,tree felling,pruning,stump removal,arboriculture",
            notes: "Tree and arboriculture specialist"
        },
        {
            tradeCategory: "Landscaping & Grounds",
            companyName: "Marcin Gardens",
            primaryContact: "",
            email: "",
            phone: "",
            coverageArea: "Ascot / Egham",
            priorityStatus: "Approved",
            coreServices: "garden maintenance,turfing,planting,hedge cutting",
            notes: "Soft landscaping & maintenance"
        },
        {
            tradeCategory: "Landscaping & Grounds",
            companyName: "JW Building & Landscaping Services Ltd",
            primaryContact: "",
            email: "",
            phone: "",
            coverageArea: "Watford / Herts",
            priorityStatus: "Approved",
            coreServices: "garden maintenance,turfing,hedge cutting,site clearance",
            notes: "Local grounds contractor"
        },
        {
            tradeCategory: "Landscaping & Grounds",
            companyName: "A G Property & Garden Services",
            primaryContact: "Ibrahim Deen",
            email: "enquiries@agpropertygardenservices.co.uk",
            phone: "07500 191191",
            coverageArea: "Greater London",
            priorityStatus: "Approved",
            coreServices: "garden maintenance,clearance,turfing,decking,hedge trimming",
            notes: "Routine garden & grounds work"
        },
        {
            tradeCategory: "Landscaping & Grounds",
            companyName: "Garden Solutions Ltd",
            primaryContact: "",
            email: "",
            phone: "",
            coverageArea: "Enfield",
            priorityStatus: "Approved",
            coreServices: "garden maintenance,lawn care,planting,hedge trimming",
            notes: "Ongoing grounds maintenance"
        },
        {
            tradeCategory: "Landscaping & Grounds",
            companyName: "Evergreen Landscapes & Building Services Ltd",
            primaryContact: "",
            email: "",
            phone: "",
            coverageArea: "North London",
            priorityStatus: "Approved",
            coreServices: "garden maintenance,planting,clearance,minor building works",
            notes: "Soft landscaping & prep works"
        },
        {
            tradeCategory: "Landscaping & Grounds",
            companyName: "MB Landscaping",
            primaryContact: "",
            email: "",
            phone: "",
            coverageArea: "South London (CR0)",
            priorityStatus: "Approved",
            coreServices: "garden maintenance,turfing,hedge trimming,clearance",
            notes: "Local soft landscaping"
        }
    ];
// Store contractors in localStorage for demo purposes
    if (!localStorage.getItem('contractors')) {
        localStorage.setItem('contractors', JSON.stringify(sampleContractors));
    }
    
    // Load and display contractors
    loadContractors();
    
    // Set up event listeners
    setupEventListeners();
});

function initApp() {
    // Initialize any app-wide functionality
    console.log("BBFM Subcontractor Database initialized");
}

function loadContractors() {
    const contractors = JSON.parse(localStorage.getItem('contractors')) || [];
    const tableBody = document.getElementById('contractor-table-body');
    
    // Clear existing rows
    tableBody.innerHTML = '';
    
    // Add each contractor to the table
    contractors.forEach(contractor => {
        const row = document.createElement('tr');
        row.className = 'hover:bg-gray-50';
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="font-medium text-gray-900">${contractor.companyName}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    ${contractor.tradeCategory}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityBadgeClass(contractor.priorityStatus)}">
                    ${contractor.priorityStatus}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">${contractor.primaryContact}</div>
                <div class="text-sm text-gray-500">${contractor.email}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${contractor.coverageArea}
            </td>
            <td class="px-6 py-4">
                <div class="flex flex-wrap gap-1">
                    ${contractor.coreServices.split(',').map(service => `
                        <span class="tag-chip inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 cursor-pointer hover:bg-blue-200">
                            ${service.trim()}
                        </span>
                    `).join('')}
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button class="edit-btn text-blue-600 hover:text-blue-900 mr-3" data-id="${contractor.companyName}">Edit</button>
                <button class="delete-btn text-red-600 hover:text-red-900" data-id="${contractor.companyName}">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
    
    // Refresh Feather icons
    feather.replace();
    
    // Set up row click handlers
    setupRowHandlers();
}
function getPriorityBadgeClass(priority) {
    switch (priority) {
        case 'PRIMARY': return 'bg-020528 text-d5b480';
        case 'Immediate': return 'bg-d5b480 text-020528';
        case 'Escalation': return 'bg-020528 text-efeee9';
        case 'Approved': return 'bg-efeee9 text-020528 border border-020528';
        default: return 'bg-efeee9 text-020528 border border-020528';
    }
}
function setupEventListeners() {
    // Add New button
    document.getElementById('add-new-btn').addEventListener('click', showAddContractorModal);
    
    // Import button
    document.getElementById('import-btn').addEventListener('click', showImportModal);
    
    // Export buttons
    document.getElementById('export-csv-btn').addEventListener('click', exportToCSV);
    document.getElementById('export-json-btn').addEventListener('click', exportToJSON);
    
    // Add from URL button
    document.getElementById('add-from-url-btn').addEventListener('click', showUrlImportModal);
    
    // Global search
    document.getElementById('global-search').addEventListener('input', filterContractors);
    
    // Filter inputs
    document.getElementById('trade-category').addEventListener('change', filterContractors);
    document.getElementById('priority-status').addEventListener('change', filterContractors);
    document.getElementById('coverage-area').addEventListener('input', filterContractors);
    document.getElementById('missing-info').addEventListener('change', filterContractors);
    
    // Sort headers
    document.querySelectorAll('.sort-header').forEach(header => {
        header.addEventListener('click', function() {
            const sortField = this.getAttribute('data-sort');
            sortContractors(sortField);
        });
    });
}

function setupRowHandlers() {
    // Edit buttons
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const companyName = this.getAttribute('data-id');
            showEditContractorModal(companyName);
        });
    });
    
    // Delete buttons
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const companyName = this.getAttribute('data-id');
            showDeleteConfirmation(companyName);
        });
    });
    
    // Row click for detail view
    document.querySelectorAll('#contractor-table-body tr').forEach(row => {
        row.addEventListener('click', function() {
            const companyName = this.querySelector('.edit-btn').getAttribute('data-id');
            showContractorDetail(companyName);
        });
    });
    
    // Tag chips
    document.querySelectorAll('.tag-chip').forEach(chip => {
        chip.addEventListener('click', function(e) {
            e.stopPropagation();
            const tag = this.textContent.trim();
            filterByTag(tag);
        });
    });
}

function filterContractors() {
    // Implement filtering logic based on search and filter inputs
    console.log("Filtering contractors...");
    // In a real app, this would filter the displayed contractors
}

function sortContractors(field) {
    // Implement sorting logic
    console.log(`Sorting by ${field}...`);
    // In a real app, this would sort the contractors
}

function filterByTag(tag) {
    // Filter contractors by the clicked tag
    console.log(`Filtering by tag: ${tag}`);
    // In a real app, this would filter the contractors
}

function showAddContractorModal() {
    const modalContent = `
        <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full modal-animate">
            <div class="px-6 py-4 border-b border-gray-200">
                <h3 class="text-lg font-medium text-gray-900">Add New Contractor</h3>
            </div>
            <div class="px-6 py-4">
                <form id="add-contractor-form">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label for="trade-category-input" class="block text-sm font-medium text-gray-700 mb-1">Trade Category</label>
                            <select id="trade-category-input" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                                <option value="">Select a trade</option>
                                <option value="Electrical">Electrical</option>
                                <option value="Plumbing">Plumbing</option>
                                <option value="HVAC">HVAC</option>
                                <option value="Fire & Life Safety">Fire & Life Safety</option>
                                <option value="Scaffolding">Scaffolding</option>
                                <option value="Landscaping & Grounds">Landscaping & Grounds</option>
<option value="Scaffolding">Scaffolding</option>
                            </select>
                        </div>
                        <div>
                            <label for="company-name-input" class="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                            <input type="text" id="company-name-input" required class="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                        </div>
                        <div>
                            <label for="primary-contact-input" class="block text-sm font-medium text-gray-700 mb-1">Primary Contact</label>
                            <input type="text" id="primary-contact-input" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                        </div>
                        <div>
                            <label for="email-input" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input type="email" id="email-input" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                        </div>
                        <div>
                            <label for="phone-input" class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                            <input type="tel" id="phone-input" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                        </div>
                        <div>
                            <label for="coverage-area-input" class="block text-sm font-medium text-gray-700 mb-1">Coverage Area</label>
                            <input type="text" id="coverage-area-input" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                        </div>
                        <div>
                            <label for="priority-status-input" class="block text-sm font-medium text-gray-700 mb-1">Priority Status</label>
                            <select id="priority-status-input" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                                <option value="PRIMARY">PRIMARY / FIRST CALL</option>
                                <option value="Immediate">Immediate</option>
                                <option value="Escalation">Escalation</option>
                                <option value="Approved">Approved</option>
                            </select>
                        </div>
                        <div class="md:col-span-2">
                            <label for="core-services-input" class="block text-sm font-medium text-gray-700 mb-1">Core Services / Scope (Comma-separated keywords)</label>
                            <input type="text" id="core-services-input" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., emergency lighting, AOV testing">
                        </div>
                        <div class="md:col-span-2">
                            <label for="notes-input" class="block text-sm font-medium text-gray-700 mb-1">Notes / When to Use</label>
                            <textarea id="notes-input" rows="3" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
                        </div>
                    </div>
                </form>
            </div>
            <div class="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
                <button type="button" class="cancel-btn bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50">
                    Cancel
                </button>
                <button type="button" class="save-btn bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Save Contractor
                </button>
            </div>
        </div>
    `;
    
    showModal(modalContent);
    
    // Set up modal event listeners
    document.querySelector('.cancel-btn').addEventListener('click', closeModal);
    document.querySelector('.save-btn').addEventListener('click', saveNewContractor);
}

function showEditContractorModal(companyName) {
    // In a real app, this would fetch the contractor data
    const contractor = {
        tradeCategory: "Scaffolding",
        companyName: "Midas Scaffolding",
        primaryContact: "John Smith",
        email: "john@midas.com",
        phone: "020 1234 5678",
        coverageArea: "London, South East",
        priorityStatus: "PRIMARY",
        coreServices: "scaffolding,temporary,structures",
        notes: "First call for all scaffolding needs. 24/7 emergency service available."
    };
    
    const modalContent = `
        <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full modal-animate">
            <div class="px-6 py-4 border-b border-gray-200">
                <h3 class="text-lg font-medium text-gray-900">Edit Contractor</h3>
            </div>
            <div class="px-6 py-4">
                <form id="edit-contractor-form">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label for="edit-trade-category" class="block text-sm font-medium text-gray-700 mb-1">Trade Category</label>
                            <select id="edit-trade-category" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                                <option value="Electrical" ${contractor.tradeCategory === 'Electrical' ? 'selected' : ''}>Electrical</option>
                                <option value="Plumbing" ${contractor.tradeCategory === 'Plumbing' ? 'selected' : ''}>Plumbing</option>
                                <option value="HVAC" ${contractor.tradeCategory === 'HVAC' ? 'selected' : ''}>HVAC</option>
                                <option value="Fire Safety" ${contractor.tradeCategory === 'Fire Safety' ? 'selected' : ''}>Fire Safety</option>
                                <option value="Scaffolding" ${contractor.tradeCategory === 'Scaffolding' ? 'selected' : ''}>Scaffolding</option>
                            </select>
                        </div>
                        <div>
                            <label for="edit-company-name" class="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                            <input type="text" id="edit-company-name" value="${contractor.companyName}" required class="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                        </div>
                        <div>
                            <label for="edit-primary-contact" class="block text-sm font-medium text-gray-700 mb-1">Primary Contact</label>
                            <input type="text" id="edit-primary-contact" value="${contractor.primaryContact}" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                        </div>
                        <div>
                            <label for="edit-email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input type="email" id="edit-email" value="${contractor.email}" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                        </div>
                        <div>
                            <label for="edit-phone" class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                            <input type="tel" id="edit-phone" value="${contractor.phone}" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                        </div>
                        <div>
                            <label for="edit-coverage-area" class="block text-sm font-medium text-gray-700 mb-1">Coverage Area</label>
                            <input type="text" id="edit-coverage-area" value="${contractor.coverageArea}" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                        </div>
                        <div>
                            <label for="edit-priority-status" class="block text-sm font-medium text-gray-700 mb-1">Priority Status</label>
                            <select id="edit-priority-status" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                                <option value="PRIMARY" ${contractor.priorityStatus === 'PRIMARY' ? 'selected' : ''}>PRIMARY / FIRST CALL</option>
                                <option value="Immediate" ${contractor.priorityStatus === 'Immediate' ? 'selected' : ''}>Immediate</option>
                                <option value="Escalation" ${contractor.priorityStatus === 'Escalation' ? 'selected' : ''}>Escalation</option>
                                <option value="Approved" ${contractor.priorityStatus === 'Approved' ? 'selected' : ''}>Approved</option>
                            </select>
                        </div>
                        <div class="md:col-span-2">
                            <label for="edit-core-services" class="block text-sm font-medium text-gray-700 mb-1">Core Services / Scope (Comma-separated keywords)</label>
                            <input type="text" id="edit-core-services" value="${contractor.coreServices}" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                        </div>
                        <div class="md:col-span-2">
                            <label for="edit-notes" class="block text-sm font-medium text-gray-700 mb-1">Notes / When to Use</label>
                            <textarea id="edit-notes" rows="3" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">${contractor.notes}</textarea>
                        </div>
                    </div>
                </form>
            </div>
            <div class="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
                <button type="button" class="cancel-btn bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50">
                    Cancel
                </button>
                <button type="button" class="save-btn bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Save Changes
                </button>
            </div>
        </div>
    `;
    
    showModal(modalContent);
    
    // Set up modal event listeners
    document.querySelector('.cancel-btn').addEventListener('click', closeModal);
    document.querySelector('.save-btn').addEventListener('click', () => saveContractorChanges(companyName));
}

function showContractorDetail(companyName) {
    // In a real app, this would fetch the contractor data
    const contractor = {
        tradeCategory: "Scaffolding",
        companyName: "Midas Scaffolding",
        primaryContact: "John Smith",
        email: "john@midas.com",
        phone: "020 1234 5678",
        coverageArea: "London, South East",
        priorityStatus: "PRIMARY",
        coreServices: "scaffolding,temporary,structures",
        notes: "First call for all scaffolding needs. 24/7 emergency service available."
    };
    
    const modalContent = `
        <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full modal-animate">
            <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 class="text-lg font-medium text-gray-900">Contractor Details</h3>
                <button class="close-btn text-gray-400 hover:text-gray-500">
                    <i data-feather="x"></i>
                </button>
            </div>
            <div class="px-6 py-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 class="text-sm font-medium text-gray-500">Company Name</h4>
                        <p class="mt-1 text-sm text-gray-900">${contractor.companyName}</p>
                    </div>
                    <div>
                        <h4 class="text-sm font-medium text-gray-500">Trade Category</h4>
                        <p class="mt-1 text-sm text-gray-900">${contractor.tradeCategory}</p>
                    </div>
                    <div>
                        <h4 class="text-sm font-medium text-gray-500">Primary Contact</h4>
                        <p class="mt-1 text-sm text-gray-900">${contractor.primaryContact}</p>
                    </div>
                    <div>
                        <h4 class="text-sm font-medium text-gray-500">Email</h4>
                        <p class="mt-1 text-sm text-gray-900 flex items-center">
                            ${contractor.email}
                            <button class="copy-btn ml-2 text-blue-600 hover:text-blue-800" data-text="${contractor.email}">
                                <i data-feather="copy" class="w-4 h-4"></i>
                            </button>
                        </p>
                    </div>
                    <div>
                        <h4 class="text-sm font-medium text-gray-500">Phone</h4>
                        <p class="mt-1 text-sm text-gray-900 flex items-center">
                            ${contractor.phone}
                            <button class="copy-btn ml-2 text-blue-600 hover:text-blue-800" data-text="${contractor.phone}">
                                <i data-feather="copy" class="w-4 h-4"></i>
                            </button>
                        </p>
                    </div>
                    <div>
                        <h4 class="text-sm font-medium text-gray-500">Coverage Area</h4>
                        <p class="mt-1 text-sm text-gray-900">${contractor.coverageArea}</p>
                    </div>
                    <div>
                        <h4 class="text-sm font-medium text-gray-500">Priority Status</h4>
                        <p class="mt-1 text-sm text-gray-900">
                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityBadgeClass(contractor.priorityStatus)}">
                                ${contractor.priorityStatus}
                            </span>
                        </p>
                    </div>
                    <div class="md:col-span-2">
                        <h4 class="text-sm font-medium text-gray-500">Core Services / Scope</h4>
                        <div class="mt-1 flex flex-wrap gap-1">
                            ${contractor.coreServices.split(',').map(service => `
                                <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                                    ${service.trim()}
                                </span>
                            `).join('')}
                        </div>
                    </div>
                    <div class="md:col-span-2">
                        <h4 class="text-sm font-medium text-gray-500">Notes / When to Use</h4>
                        <p class="mt-1 text-sm text-gray-900 whitespace-pre-line">${contractor.notes}</p>
                    </div>
                </div>
            </div>
            <div class="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
                <button type="button" class="copy-summary-btn bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 flex items-center gap-2">
                    <i data-feather="copy" class="w-4 h-4"></i> Copy Summary
                </button>
                <button type="button" class="edit-btn bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Edit Contractor
                </button>
            </div>
        </div>
    `;
    
    showModal(modalContent);
    
    // Refresh Feather icons
    feather.replace();
    
    // Set up modal event listeners
    document.querySelector('.close-btn').addEventListener('click', closeModal);
    document.querySelector('.edit-btn').addEventListener('click', () => {
        closeModal();
        showEditContractorModal(companyName);
    });
    
    // Copy buttons
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const text = this.getAttribute('data-text');
            copyToClipboard(text);
            showToast('Copied to clipboard!');
        });
    });
    
    // Copy summary button
    document.querySelector('.copy-summary-btn').addEventListener('click', () => {
        const summary = `Company: ${contractor.companyName}
Contact: ${contractor.primaryContact}
Email: ${contractor.email}
Phone: ${contractor.phone}
Trade: ${contractor.tradeCategory}
Priority: ${contractor.priorityStatus}
Services: ${contractor.coreServices}
Notes: ${contractor.notes}`;
        
        copyToClipboard(summary);
        showToast('Contractor summary copied to clipboard!');
    });
}

function showDeleteConfirmation(companyName) {
    const modalContent = `
        <div class="bg-white rounded-lg shadow-xl max-w-md w-full modal-animate">
            <div class="px-6 py-4 border-b border-gray-200">
                <h3 class="text-lg font-medium text-gray-900">Delete Contractor</h3>
            </div>
            <div class="px-6 py-4">
                <p class="text-sm text-gray-700">Are you sure you want to delete "${companyName}"? This action cannot be undone.</p>
            </div>
            <div class="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
                <button type="button" class="cancel-btn bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50">
                    Cancel
                </button>
                <button type="button" class="confirm-btn bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
                    Delete Contractor
                </button>
            </div>
        </div>
    `;
    
    showModal(modalContent);
    
    // Set up modal event listeners
    document.querySelector('.cancel-btn').addEventListener('click', closeModal);
    document.querySelector('.confirm-btn').addEventListener('click', () => {
        deleteContractor(companyName);
        closeModal();
    });
}

function showImportModal() {
    const modalContent = `
        <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full modal-animate">
            <div class="px-6 py-4 border-b border-gray-200">
                <h3 class="text-lg font-medium text-gray-900">Import Contractors</h3>
            </div>
            <div class="px-6 py-4">
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Import Options</label>
                    <div class="flex gap-4">
                        <label class="inline-flex items-center">
                            <input type="radio" name="import-option" value="merge" checked class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300">
                            <span class="ml-2 text-sm text-gray-700">Merge (update existing, add new)</span>
                        </label>
                        <label class="inline-flex items-center">
                            <input type="radio" name="import-option" value="overwrite" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300">
                            <span class="ml-2 text-sm text-gray-700">Overwrite all data</span>
                        </label>
                    </div>
                </div>
                
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <div class="flex flex-col items-center justify-center">
                        <i data-feather="upload" class="w-12 h-12 text-gray-400 mb-3"></i>
                        <h4 class="text-sm font-medium text-gray-700 mb-1">Drag and drop files here</h4>
                        <p class="text-xs text-gray-500 mb-3">or</p>
                        <label for="file-upload" class="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                            Select Files
                        </label>
                        <input id="file-upload" type="file" accept=".csv,.xlsx" class="sr-only" multiple>
                    </div>
                    <p class="mt-2 text-xs text-gray-500">Supports CSV and Excel (.xlsx) files</p>
                </div>
                
                <div class="mt-4">
                    <button id="download-template-btn" class="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1">
                        <i data-feather="download" class="w-4 h-4"></i> Download CSV template
                    </button>
                </div>
            </div>
            <div class="px-6 py-4 border-t border-gray-200 flex justify-end">
                <button type="button" class="close-btn bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50">
                    Close
                </button>
            </div>
        </div>
    `;
    
    showModal(modalContent);
    
    // Refresh Feather icons
    feather.replace();
    
    // Set up modal event listeners
    document.querySelector('.close-btn').addEventListener('click', closeModal);
    document.getElementById('download-template-btn').addEventListener('click', downloadTemplate);
    
    // File upload handling
    document.getElementById('file-upload').addEventListener('change', handleFileUpload);
}

function showUrlImportModal() {
    const modalContent = `
        <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full modal-animate">
            <div class="px-6 py-4 border-b border-gray-200">
                <h3 class="text-lg font-medium text-gray-900">Add Contractors from URLs</h3>
            </div>
            <div class="px-6 py-4">
                <div class="mb-4">
                    <label for="url-input" class="block text-sm font-medium text-gray-700 mb-1">Paste URLs (one per line)</label>
                    <textarea id="url-input" rows="5" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="https://www.example.com
https://www.checkatrade.com/profile
https://www.trustatrader.com/profile"></textarea>
                </div>
                
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-1">Supported Sources</label>
                    <div class="flex gap-4">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Company Websites
                        </span>
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Checkatrade
                        </span>
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            TrustATrader
                        </span>
                    </div>
                </div>
                
                <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <i data-feather="alert-triangle" class="h-5 w-5 text-yellow-400"></i>
                        </div>
                        <div class="ml-3">
                            <p class="text-sm text-yellow-700">
                                Extraction accuracy varies by source. All extracted contractors will be flagged for review before being added to the main database.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
                <button type="button" class="cancel-btn bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50">
                    Cancel
                </button>
                <button type="button" class="process-btn bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Process URLs
                </button>
            </div>
        </div>
    `;
    
    showModal(modalContent);
    
    // Refresh Feather icons
    feather.replace();
    
    // Set up modal event listeners
    document.querySelector('.cancel-btn').addEventListener('click', closeModal);
    document.querySelector('.process-btn').addEventListener('click', processUrls);
}

function showModal(content) {
    const modalContainer = document.getElementById('modal-container');
    modalContainer.innerHTML = content;
    modalContainer.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
}

function closeModal() {
    document.getElementById('modal-container').classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

function saveNewContractor() {
    // In a real app, this would validate and save the new contractor
    console.log("Saving new contractor...");
    showToast('Contractor added successfully!');
    closeModal();
    loadContractors();
}

function saveContractorChanges(companyName) {
    // In a real app, this would validate and save the changes
    console.log(`Saving changes for ${companyName}...`);
    showToast('Changes saved successfully!');
    closeModal();
    loadContractors();
}

function deleteContractor(companyName) {
    // In a real app, this would delete the contractor
    console.log(`Deleting ${companyName}...`);
    showToast('Contractor deleted successfully!');
    loadContractors();
}

function exportToCSV() {
    // In a real app, this would export the data to CSV
    console.log("Exporting to CSV...");
    showToast('CSV export started!');
}

function exportToJSON() {
    // In a real app, this would export the data to JSON
    console.log("Exporting to JSON...");
    showToast('JSON export started!');
}

function downloadTemplate() {
    // In a real app, this would download a CSV template
    console.log("Downloading template...");
    showToast('Template downloaded!');
}

function handleFileUpload(event) {
    const files = event.target.files;
    if (files.length === 0) return;
    
    // In a real app, this would process the uploaded files
    console.log("Processing uploaded files...");
    
    // Show import preview
    showImportPreview(files);
}

function processUrls() {
    const urlsText = document.getElementById('url-input').value;
    if (!urlsText.trim()) {
        showToast('Please enter at least one URL', 'error');
        return;
    }
    
    const urls = urlsText.split('\n').filter(url => url.trim());
    console.log("Processing URLs:", urls);
    
    // In a real app, this would fetch and process the URLs
    showToast(`Processing ${urls.length} URLs...`);
    closeModal();
}

function showImportPreview(files) {
    // In a real app, this would show a preview of the import data
    console.log("Showing import preview...");
    
    const modalContent = `
        <div class="bg-white rounded-lg shadow-xl max-w-4xl w-full modal-animate max-h-[90vh] flex flex-col">
            <div class="px-6 py-4 border-b border-gray-200">
                <h3 class="text-lg font-medium text-gray-900">Import Preview</h3>
            </div>
            <div class="px-6 py-4 overflow-auto flex-grow">
                <div class="mb-4">
                    <div class="flex items-center gap-2">
                        <i data-feather="file" class="text-blue-500"></i>
                        <span class="font-medium">${files[0].name}</span>
                        <span class="text-sm text-gray-500">${(files[0].size / 1024).toFixed(1)} KB</span>
                    </div>
                </div>
                
                <div class="bg-gray-50 p-4 rounded-md mb-4">
                    <h4 class="text-sm font-medium text-gray-700 mb-2">Import Summary</h4>
                    <div class="grid grid-cols-3 gap-4">
                        <div class="bg-white p-3 rounded-md shadow-sm">
                            <p class="text-sm text-gray-500">New Records</p>
                            <p class="text-xl font-semibold text-green-600">12</p>
                        </div>
                        <div class="bg-white p-3 rounded-md shadow-sm">
                            <p class="text-sm text-gray-500">Updated Records</p>
                            <p class="text-xl font-semibold text-blue-600">5</p>
                        </div>
                        <div class="bg-white p-3 rounded-md shadow-sm">
                            <p class="text-sm text-gray-500">Skipped Records</p>
                            <p class="text-xl font-semibold text-gray-600">2</p>
                        </div>
                    </div>
                </div>
                
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trade</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">New</span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">ABC Electrical</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Electrical</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">John Doe</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Ready</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Update</span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Midas Scaffolding</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Scaffolding</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">John Smith</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Ready</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Review</span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">XYZ Plumbing</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Plumbing</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Missing email</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
                <button type="button" class="cancel-btn bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50">
                    Cancel
                </button>
                <button type="button" class="confirm-btn bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Confirm Import
                </button>
            </div>
        </div>
    `;
    
    showModal(modalContent);
    
    // Refresh Feather icons
    feather.replace();
    
    // Set up modal event listeners
    document.querySelector('.cancel-btn').addEventListener('click', closeModal);
    document.querySelector('.confirm-btn').addEventListener('click', () => {
        // In a real app, this would confirm the import
        console.log("Confirming import...");
        showToast('Import completed successfully!');
        closeModal();
        loadContractors();
    });
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

function showToast(message, type = 'success') {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `fixed bottom-4 right-4 px-4 py-2 rounded-md shadow-md text-white ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
    } flex items-center gap-2 z-50`;
    toast.innerHTML = `
        <i data-feather="${type === 'success' ? 'check-circle' : 'alert-circle'}" class="w-5 h-5"></i>
        <span>${message}</span>
    `;
    
    // Add to DOM
    document.body.appendChild(toast);
    
    // Refresh Feather icons
    feather.replace();
    
    // Remove after delay
    setTimeout(() => {
        toast.classList.add('opacity-0', 'transition-opacity', 'duration-300');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}