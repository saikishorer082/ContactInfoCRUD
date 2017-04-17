using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using ContactInfo.Models;

namespace ContactInfo.Controllers
{
    public class ContactsInfoController : ApiController
    {
        private ContactDBDataContext db = new ContactDBDataContext();

        // GET: api/ContactsInfo
        public IQueryable<ContactsInfo_tbl> GetContactsInfo_tbl()
        {
            return db.ContactsInfo_tbl;
        }

        // GET: api/ContactsInfo/5
        [ResponseType(typeof(ContactsInfo_tbl))]
        public IHttpActionResult GetContactsInfo_tbl(int id)
        {
            ContactsInfo_tbl contactsInfo_tbl = db.ContactsInfo_tbl.Find(id);
            if (contactsInfo_tbl == null)
            {
                return NotFound();
            }

            return Ok(contactsInfo_tbl);
        }

        // PUT: api/ContactsInfo/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutContactsInfo_tbl(int id, ContactsInfo_tbl contactsInfo_tbl)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != contactsInfo_tbl.ID)
            {
                return BadRequest();
            }

            db.Entry(contactsInfo_tbl).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContactsInfo_tblExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/ContactsInfo
        [ResponseType(typeof(ContactsInfo_tbl))]
        public IHttpActionResult PostContactsInfo_tbl(ContactsInfo_tbl contactsInfo_tbl)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ContactsInfo_tbl.Add(contactsInfo_tbl);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = contactsInfo_tbl.ID }, contactsInfo_tbl);
        }

        // DELETE: api/ContactsInfo/5
        [ResponseType(typeof(ContactsInfo_tbl))]
        public IHttpActionResult DeleteContactsInfo_tbl(int id)
        {
            ContactsInfo_tbl contactsInfo_tbl = db.ContactsInfo_tbl.Find(id);
            if (contactsInfo_tbl == null)
            {
                return NotFound();
            }

            db.ContactsInfo_tbl.Remove(contactsInfo_tbl);
            db.SaveChanges();

            return Ok(contactsInfo_tbl);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ContactsInfo_tblExists(int id)
        {
            return db.ContactsInfo_tbl.Count(e => e.ID == id) > 0;
        }
    }
}