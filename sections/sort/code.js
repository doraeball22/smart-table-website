app.controller('sortCtrl', ['$scope', '$filter', function (scope, filter) {
    scope.rowCollection = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];

    scope.columnCollection = [
        {label: 'First Name', map: 'firstName', sortPredicate: function (dataRow) {
            //predicate as a function (see angular orderby documentation) : it will sort by the string length
            return dataRow.firstName.length;
        } },
        {label: 'Last Name', map: 'lastName', formatFunction: 'uppercase'},
        {label: 'Birth Date', map: 'birthDate', formatFunction: 'date'},
        {label: 'Balance', map: 'balance', formatFunction: 'currency', formatParameter: '$'},
        {label: 'e-mail', map: 'email', isSortable: false}
    ];
}]);
