# rubocop:disable Style/Documentation
# frozen_string_literal: true

class Invoice
  def initialize(id)
    @id = id
  end

  def pay
    make_sure_invoice_approved
    create_transaction_entry
    decrease_company_total_balance
    record_tax_deduction
  end

  private

  def make_sure_invoice_approved
    @invoice = Invoice.find(@id)
    raise Error unless @invoice.approved?
  end

  def create_transaction_entry
    @transaction = Transaction.process(@invoice)
  end

  def decrease_company_total_balance
    @invoice.company.balance = @invoice.company.balance - @transaction.amount
    @invoice.company.balance.save
  end

  def record_tax_deduction
    TaxEntry.record(@transaction)
  end
end

# -------------------------------
# what if stakeholder request you to create multiple transactions for any installment invoice.
# can you easily change this code?
# -------------------------------

# rubocop:enable Style/Documentation






























# def pay_v2
#   invoice = fetch_approved_invoice
#   raise InvoiceInvalidError if invoice.blank?
#   transaction = create_transaction_entry(invoice)
#   decrease_company_total_balance(invoice.company, transaction)
#   record_tax_deduction(transaction)
# end