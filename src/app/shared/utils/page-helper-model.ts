export class PageHelper {

  /**
   * 不要手动对这个属性进行赋值，它是和分页工具条自动绑定的
   * @type {number}
   */
  public currentPage: number = 1;

  /**
   * 页码，由工具条改变
   * @type {number}
   */
  public numPages: number = 0;

  /**
   * 工具条显示最多多少页
   * @type {number}
   */
  public maxSize: number = 8;

  /**
   * 总记录数
   */
  public totalItems: number = 1;

  /**
   * 每页显示条数
   * @type {number}
   */
  public pageSize: number = 10;

  public keyword: string = "";

}
