import { ViewGroup } from "../libs/enums/view.enum";
import Errors, { HttpCode, Message } from "../libs/Error";
import { View, ViewInput } from "../libs/types/view";
import ViewModel from "../schema/View.model";

class ViewService {
  private readonly viewModel;

  constructor() {
    this.viewModel = ViewModel;
  }

  public async checkViewExistence(input: ViewInput): Promise<View> {
    return await this.viewModel
      .findOne({
        memberId: input.memberId, 
        viewRefId: input.viewRefId
      })
      .exec();
  }

  public async insertMemberView(input: ViewInput): Promise<View> {
    try {
      console.log("Insert member view input=>", input);
      return await this.viewModel.create(input);
    } catch (err) {
        console.log("ERROR, model: insertMemberView:", err);
        throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }
}

export default ViewService;