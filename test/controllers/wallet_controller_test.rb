require 'test_helper'

class WalletControllerTest < ActionDispatch::IntegrationTest
  test "should get transactions" do
    get wallet_transactions_url
    assert_response :success
  end

end
