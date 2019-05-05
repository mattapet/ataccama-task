//#region imports
import columns from '../columns';
//#endregion

it('should return an empty array is no properties are passed', () => {
  // Arrange

  // Act
  const returner = columns([], () => {});

  // Assert
  expect(returner).toEqual([]);
});

it('should return mapped properties and a action columns', () => {
  // Arrange
  const properties = ['a', 'b', 'c'];

  // Act
  const propertyColumns = columns(properties, () => {});
  const actionColumn = propertyColumns.splice(propertyColumns.length - 1)[0];

  // Assert
  propertyColumns.forEach(column =>
    expect(column.dataIndex).toEqual(`data.${column.title}`)
  );
  expect(actionColumn.title).toEqual('Actions');
  expect(actionColumn.render).toBeTruthy();
});
